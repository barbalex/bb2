// @flow
import { extendObservable, action, computed } from 'mobx'
import app from 'ampersand-app'
import slug from 'slug'

import getPathFromDoc from '../../modules/getPathFromDoc.js'
import getActors from '../../modules/getActors.js'
import sortActors from '../../modules/sortActors.js'

export default (store: Object): void => {
  extendObservable(store.actors, {
    actors: [],

    // cache the id, not the entire doc
    // advantage: on first load actors is empty so no activeActor can be gotten
    // but if id is used, it can be cached
    activeActorId: null,

    activeActor: computed(
      (): ?Object =>
        store.publications.actors.find(
          actor => actor._id === store.actors.activeActorId,
        ),
      { name: `activeActor` },
    ),

    getActorsCallback: null,

    getActors: action('getActors', (): void =>
      getActors()
        .then(actors => {
          store.actors.actors = actors
          if (store.actors.getActorsCallback) {
            store.actors.getActorsCallback()
            store.actors.getActorsCallback = null
          }
          store.actors.triggerStore()
        })
        .catch(error =>
          app.Actions.showError({
            msg: error,
          }),
        ),
    ),

    newActor: action('newActor', (category: string): void => {
      const categorySlugified = slug(category, { lower: true })
      const _id = `actors_${categorySlugified}`
      const draft = true
      const article = 'IA=='
      const type = 'actors'
      const actor = { _id, category, draft, article, type }
      store.actors.saveActor(actor)
    }),

    showNewActor: false,

    setShowNewActor: action('setShowNewActor', show => {
      store.actors.showNewActor = show
    }),

    getActor: action('getActor', (id: ?string): void => {
      if (!id) {
        app.router.navigate('/actors')
        store.actors.activeActorId = null
      } else {
        store.actors.activeActorId = id
        if (store.actors.actors.length === 0) {
          // on first load actors is empty
          // need to wait until onGetActors fires
          store.actors.getActorsCallback = () => {
            const actor = store.actors.actors.find(a => a._id === id)
            const path = getPathFromDoc(actor)
            app.router.navigate(`/${path}`)
          }
        } else {
          const actor = store.actors.actors.find(a => a._id === id)
          const path = getPathFromDoc(actor)
          app.router.navigate(`/${path}`)
        }
      }
    }),

    updateActorsInCache: action(
      'updateActorsInCache',
      (actor: Object): void => {
        // first update the actor in store.actors.actors
        store.actors.actors = store.actors.actors.filter(
          a => a._id !== actor._id,
        )
        store.actors.actors.push(actor)
        store.actors.actors = sortActors(store.actors.actors)
      },
    ),

    revertCache: action(
      'revertCache',
      (oldActors: Array<Object>, oldActiveActorId: string): void => {
        store.actors.actors = oldActors
        store.actors.activeActorId = oldActiveActorId
      },
    ),

    saveActor: action('saveActor', (actor: Object): void => {
      // keep old cache in case of error
      const oldActors = store.actors.actors
      const oldActiveActorId = store.actors.activeActorId
      // optimistically update in cache
      store.actors.updateActorsInCache(actor)
      app.db
        .put(actor)
        .then(resp => {
          // resp.rev is new rev
          actor._rev = resp.rev
          // definitely update in cache
          store.actors.updateActorsInCache(actor)
        })
        .catch(error => {
          store.actors.revertCache(oldActors, oldActiveActorId)
          app.Actions.showError({
            title: 'Error saving actor:',
            msg: error,
          })
        })
    }),

    removeActorFromCache: action(
      'removeActorFromCache',
      (actor: Object): void => {
        // first update the actor in store.actors.actors
        store.actors.actors = store.actors.actors.filter(
          thisActor => thisActor._id !== actor._id,
        )
        store.actors.actors = sortActors(store.actors.actors)
        // now update store.actors.activeActorId if it is the active actor's _id
        const isActiveActor = store.actors.activeActorId === actor._id
        if (isActiveActor) store.actors.activeActorId = null
      },
    ),

    removeActor: action('removeActor', (actor: Object): void => {
      // keep old cache in case of error
      const oldActors = store.actors.actors
      const oldActiveActorId = store.actors.activeActorId
      // optimistically remove event from cache
      store.actors.removeActorFromCache(actor)
      app.db.remove(actor).catch(error => {
        // oops. Revert optimistic removal
        store.actors.revertCache(oldActors, oldActiveActorId)
        app.Actions.showError({
          title: 'Error removing actor:',
          msg: error,
        })
      })
    }),

    toggleDraftOfActor: action('toggleDraftOfActor', (actor: Object): void => {
      if (actor.draft === true) {
        delete actor.draft
      } else {
        actor.draft = true
      }
      store.actors.saveActor(actor)
    }),
  })
}
