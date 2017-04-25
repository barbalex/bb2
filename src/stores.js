import app from 'ampersand-app'
import Reflux from 'reflux'
import { Base64 } from 'js-base64'
import slug from 'slug'
import getPathFromDoc from './modules/getPathFromDoc.js'
import sortCommentaries from './modules/sortCommentaries.js'
import getActors from './modules/getActors.js'
import sortActors from './modules/sortActors.js'
import getPublications from './modules/getPublications.js'
import sortPublications from './modules/sortPublications.js'
import uniq from 'lodash/uniq'

export default Actions => {
  app.commentariesStore = Reflux.createStore({
    listenables: Actions,

    updateCommentariesInCache(commentary) {
      // first update the commentary in this.commentaries
      this.commentaries = this.commentaries.filter(
        c => c._id !== commentary._id,
      )
      this.commentaries.push(commentary)
      this.commentaries = sortCommentaries(this.commentaries)
      // now tell every one!
      this.triggerStore()
    },

    revertCache(oldCommentaries, oldActiveCommentaryId) {
      this.commentaries = oldCommentaries
      this.activeCommentaryId = oldActiveCommentaryId
      this.triggerStore()
    },

    onSaveCommentary(commentary) {
      // keep old cache in case of error
      const oldCommentaries = this.commentaries
      const oldActiveCommentaryId = this.activeCommentaryId
      // optimistically update in cache
      this.updateCommentariesInCache(commentary)
      app.db
        .put(commentary)
        .then(resp => {
          // resp.rev is new rev
          commentary._rev = resp.rev
          // definitely update in cache
          this.updateCommentariesInCache(commentary)
        })
        .catch(error => {
          this.revertCache(oldCommentaries, oldActiveCommentaryId)
          app.Actions.showError({
            title: 'Error saving commentary:',
            msg: error,
          })
        })
    },

    removeCommentaryFromCache(commentary) {
      // first update the commentary in this.commentaries
      this.commentaries = this.commentaries.filter(
        thisCommentary => thisCommentary._id !== commentary._id,
      )
      this.commentaries = sortCommentaries(this.commentaries)
      // now update this.activeCommentaryId if it is the active commentary's _id
      const isActiveCommentary = this.activeCommentaryId === commentary._id
      if (isActiveCommentary) this.activeCommentaryId = null
      // now tell every one!
      this.triggerStore()
    },

    onRemoveCommentary(commentary) {
      // keep old cache in case of error
      const oldCommentaries = this.commentaries
      const oldActiveCommentaryId = this.activeCommentaryId
      // optimistically remove event from cache
      this.removeCommentaryFromCache(commentary)
      app.db.remove(commentary).catch(error => {
        // oops. Revert optimistic removal
        this.revertCache(oldCommentaries, oldActiveCommentaryId)
        app.Actions.showError({
          title: 'Error removing commentary:',
          msg: error,
        })
      })
    },

    onToggleDraftOfCommentary(commentary) {
      if (commentary.draft === true) {
        delete commentary.draft
      } else {
        commentary.draft = true
      }
      this.onSaveCommentary(commentary)
    },

    triggerStore() {
      this.trigger(this.commentaries, this.activeCommentary())
    },
  })

  app.publicationsStore = Reflux.createStore({
    listenables: Actions,

    publications: [],

    activePublicationCategory: null,

    activePublicationId: null,

    activePublication() {
      return (
        this.publications.find(
          publication => publication._id === this.activePublicationId,
        ) || null
      )
    },

    getPublicationsCallback: null,

    onGetPublications() {
      getPublications()
        .then(publications => {
          this.publications = publications
          if (this.getPublicationsCallback) {
            this.getPublicationsCallback()
            this.getPublicationsCallback = null
          }
          this.triggerStore()
        })
        .catch(error =>
          app.Actions.showError({
            msg: error,
          }),
        )
    },

    onNewPublication(category, title) {
      const titleSlugified = slug(title)
      const categorySlugified = slug(category)
      const _id = `publications_${categorySlugified}_${titleSlugified}`
      const type = 'publications'
      const draft = true
      const article = Base64.encode(
        `<div class='actors col500'>
          <ul style='padding-left: 20px;'>
            <li>Name (year). Title, where.</li>
          </ul>
        </div>`,
      )
      const publication = { _id, type, draft, category, title, article }
      this.activePublicationCategory = category
      this.onSavePublication(publication)
    },

    onGetPublication(id) {
      if (!id) {
        app.router.navigate('/publications')
        this.activePublicationId = null
        this.triggerStore()
      } else {
        this.activePublicationId = id
        if (this.publications.length === 0) {
          // on first load publications is empty
          // need to wait until onGetPublications fires
          this.getPublicationsCallback = () => {
            const publication = this.publications.find(p => p._id === id)
            this.activePublicationCategory = publication.category
            const path = getPathFromDoc(publication)
            app.router.navigate(`/${path}`)
          }
        } else {
          const publication = this.publications.find(p => p._id === id)
          this.activePublicationCategory = publication.category
          const path = getPathFromDoc(publication)
          app.router.navigate(`/${path}`)
          this.triggerStore()
        }
      }
    },

    updatePublicationInCache(publication) {
      // first update the publication in this.publications
      this.publications = this.publications.filter(
        p => p._id !== publication._id,
      )
      this.publications.push(publication)
      this.publications = sortPublications(this.publications)
      // now tell every one!
      this.triggerStore()
    },

    revertCache(
      oldPublications,
      oldActivePublicationId,
      oldActivePublicationCategory,
    ) {
      this.publications = oldPublications
      this.activePublicationId = oldActivePublicationId
      this.activePublicationCategory = oldActivePublicationCategory
      this.triggerStore()
    },

    onSavePublication(publication) {
      // keep old cache in case of error
      const oldPublications = this.publications
      const oldActivePublicationId = this.activePublicationId
      const oldActivePublicationCategory = this.activePublicationCategory
      // optimistically update in cache
      this.updatePublicationInCache(publication)
      app.db
        .put(publication)
        .then(resp => {
          // resp.rev is new rev
          publication._rev = resp.rev
          // definitely update in cache
          this.updatePublicationInCache(publication)
        })
        .catch(error => {
          this.revertCache(
            oldPublications,
            oldActivePublicationId,
            oldActivePublicationCategory,
          )
          app.Actions.showError({
            title: 'Error saving publication:',
            msg: error,
          })
        })
    },

    removePublicationFromCache(publication) {
      // first update the publication in this.publications
      this.publications = this.publications.filter(
        p => p._id !== publication._id,
      )
      this.publications = sortPublications(this.publications)
      // now update this.activePublicationId if it is the active publication's _id
      const isActivePublication = this.activePublicationId === publication._id
      if (isActivePublication) this.activePublicationId = null
      // now tell every one!
      this.triggerStore()
    },

    onRemovePublication(publication) {
      // keep old cache in case of error
      const oldPublications = this.publications
      const oldActivePublicationId = this.activePublicationId
      const oldActivePublicationCategory = this.activePublicationCategory
      // optimistically remove publication from cache
      this.removePublicationFromCache(publication)
      app.db.remove(publication).catch(error => {
        // oops. Revert optimistic removal
        this.revertCache(
          oldPublications,
          oldActivePublicationId,
          oldActivePublicationCategory,
        )
        app.Actions.showError({
          title: 'Error removing publication:',
          msg: error,
        })
      })
    },

    onToggleDraftOfPublication(publication) {
      if (publication.draft === true) {
        delete publication.draft
      } else {
        publication.draft = true
      }
      this.onSavePublication(publication)
    },

    getPublicationCategories() {
      const allCategories = this.publications.map(
        publication => publication.category,
      )
      const publicationCategories = uniq(allCategories)
      return publicationCategories.sort()
    },

    onSetPublicationCategory(category) {
      if (this.activePublicationCategory !== category)
        this.activePublicationId = null
      this.activePublicationCategory = category
      const categorySlugified = slug(category)
      app.router.navigate(`/publications/${categorySlugified}`)
      this.triggerStore()
    },

    triggerStore() {
      this.trigger(
        this.publications,
        this.activePublicationCategory,
        this.activePublication(),
      )
    },
  })

  app.actorsStore = Reflux.createStore({
    listenables: Actions,

    actors: [],

    // cache the id, not the entire doc
    // advantage: on first load actors is empty so no activeActor can be gotten
    // but if id is used, this can be cached
    activeActorId: null,

    activeActor() {
      return this.actors.find(actor => actor._id === this.activeActorId)
    },

    getActorsCallback: null,

    onGetActors() {
      getActors()
        .then(actors => {
          this.actors = actors
          if (this.getActorsCallback) {
            this.getActorsCallback()
            this.getActorsCallback = null
          }
          this.triggerStore()
        })
        .catch(error =>
          app.Actions.showError({
            msg: error,
          }),
        )
    },

    onNewActor(category) {
      const categorySlugified = slug(category, { lower: true })
      const _id = `actors_${categorySlugified}`
      const draft = true
      const article = 'IA=='
      const type = 'actors'
      const actor = { _id, category, draft, article, type }
      this.onSaveActor(actor)
    },

    onGetActor(id) {
      if (!id) {
        app.router.navigate('/actors')
        this.activeActorId = null
        this.triggerStore()
      } else {
        this.activeActorId = id
        if (this.actors.length === 0) {
          // on first load actors is empty
          // need to wait until onGetActors fires
          this.getActorsCallback = () => {
            const actor = this.actors.find(a => a._id === id)
            const path = getPathFromDoc(actor)
            app.router.navigate(`/${path}`)
          }
        } else {
          const actor = this.actors.find(a => a._id === id)
          const path = getPathFromDoc(actor)
          app.router.navigate(`/${path}`)
          this.triggerStore()
        }
      }
    },

    updateActorsInCache(actor) {
      // first update the actor in this.actors
      this.actors = this.actors.filter(a => a._id !== actor._id)
      this.actors.push(actor)
      this.actors = sortActors(this.actors)
      // now tell every one!
      this.triggerStore()
    },

    revertCache(oldActors, oldActiveActorId) {
      this.actors = oldActors
      this.activeActorId = oldActiveActorId
      this.triggerStore()
    },

    onSaveActor(actor) {
      // keep old cache in case of error
      const oldActors = this.actors
      const oldActiveActorId = this.activeActorId
      // optimistically update in cache
      this.updateActorsInCache(actor)
      app.db
        .put(actor)
        .then(resp => {
          // resp.rev is new rev
          actor._rev = resp.rev
          // definitely update in cache
          this.updateActorsInCache(actor)
        })
        .catch(error => {
          this.revertCache(oldActors, oldActiveActorId)
          app.Actions.showError({
            title: 'Error saving actor:',
            msg: error,
          })
        })
    },

    removeActorFromCache(actor) {
      // first update the actor in this.actors
      this.actors = this.actors.filter(thisActor => thisActor._id !== actor._id)
      this.actors = sortActors(this.actors)
      // now update this.activeActorId if it is the active actor's _id
      const isActiveActor = this.activeActorId === actor._id
      if (isActiveActor) this.activeActorId = null
      // now tell every one!
      this.triggerStore()
    },

    onRemoveActor(actor) {
      // keep old cache in case of error
      const oldActors = this.actors
      const oldActiveActorId = this.activeActorId
      // optimistically remove event from cache
      this.removeActorFromCache(actor)
      app.db.remove(actor).catch(error => {
        // oops. Revert optimistic removal
        this.revertCache(oldActors, oldActiveActorId)
        app.Actions.showError({
          title: 'Error removing actor:',
          msg: error,
        })
      })
    },

    onToggleDraftOfActor(actor) {
      if (actor.draft === true) {
        delete actor.draft
      } else {
        actor.draft = true
      }
      Actions.saveActor(actor)
    },

    triggerStore() {
      this.trigger(this.actors, this.activeActor())
    },
  })

  app.loginStore = Reflux.createStore({
    /*
     * contains email of logged in user
     * well, it is saved in localStorage as window.localStorage.email
     * app.js sets default email (null) if not exists on app start
     */
    listenables: Actions,

    getLogin() {
      return window.localStorage.email
    },

    onLogin(email) {
      // change email only if it was passed
      const changeEmail = email !== undefined
      let lsEmail = window.localStorage.email
      if ((changeEmail && lsEmail !== email) || !email) {
        if (changeEmail) {
          lsEmail = email
        } else {
          email = lsEmail
        }
        this.trigger(email)
        window.localStorage.email = email
      }
    },

    onLogout() {
      delete window.localStorage.email
      this.trigger(null)
    },
  })

  app.errorStore = Reflux.createStore({
    /*
     * receives an error object with two keys: title, msg
     * keeps error objects in the array errors
     * deletes errors after a defined time - the time while the error will be shown to the user
     *
     * if a view wants to inform of an error it
     * calls action showError and passes the object
     *
     * the errorStore triggers, passing the errors array
     * ...then triggers again after removing the last error some time later
     *
     * Test: app.Actions.showError({title: 'testTitle', msg: 'testMessage'})
     * template: app.Actions.showError({title: 'title', msg: error})
     */
    listenables: Actions,

    errors: [],

    // how long the error will be shown
    duration: 10000,

    onShowError(error) {
      if (!error) {
        // user wants to remove error messages
        this.errors = []
        this.trigger([])
      } else {
        if (error.msg && error.msg.message) error.msg = error.msg.message
        this.errors.unshift(error)
        this.trigger(this.errors)
        setTimeout(() => {
          this.errors.pop()
          this.trigger(this.errors)
        }, this.duration)
      }
    },
  })
}
