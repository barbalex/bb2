// @flow
import { extendObservable, action, computed } from 'mobx'
import app from 'ampersand-app'
import { Base64 } from 'js-base64'
import slug from 'slug'

import getPublications from '../../modules/getPublications.js'
import getPathFromDoc from '../../modules/getPathFromDoc.js'
import sortPublications from '../../modules/sortPublications.js'
import uniq from 'lodash/uniq'

export default (store: Object): void => {
  extendObservable(store.publications, {
    publications: [],

    activePublicationCategory: null,

    activePublicationId: null,

    activePublication: computed(
      (): ?Object =>
        store.publications.publications.find(
          publication =>
            publication._id === store.publications.activePublicationId,
        ) || null,
      { name: `activePublication` },
    ),

    getPublicationsCallback: null,

    getPublications: action('getPublications', (): void =>
      getPublications()
        .then(publications => {
          store.publications.publications = publications
          if (store.publications.getPublicationsCallback) {
            store.publications.getPublicationsCallback()
            store.publications.getPublicationsCallback = null
          }
        })
        .catch(error =>
          app.Actions.showError({
            msg: error,
          }),
        ),
    ),

    newPublication: action(
      'newPublication',
      (category: string, title: string): void => {
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
        store.publications.activePublicationCategory = category
        store.publications.savePublication(publication)
      },
    ),

    getPublication: action('getPublication', (id: ?string): void => {
      if (!id) {
        app.router.navigate('/publications')
        store.publications.activePublicationId = null
      } else {
        store.publications.activePublicationId = id
        if (store.publications.publications.length === 0) {
          // on first load publications is empty
          // need to wait until onGetPublications fires
          store.publications.getPublicationsCallback = () => {
            const publication = store.publications.publications.find(
              p => p._id === id,
            )
            store.publications.activePublicationCategory = publication.category
            const path = getPathFromDoc(publication)
            app.router.navigate(`/${path}`)
          }
        } else {
          const publication = store.publications.publications.find(
            p => p._id === id,
          )
          store.publications.activePublicationCategory = publication.category
          const path = getPathFromDoc(publication)
          app.router.navigate(`/${path}`)
        }
      }
    }),

    updatePublicationInCache: action(
      'updatePublicationInCache',
      (publication: Object): void => {
        // first update the publication in store.publications.publications
        store.publications.publications = store.publications.publications.filter(
          p => p._id !== publication._id,
        )
        store.publications.publications.push(publication)
        store.publications.publications = sortPublications(
          store.publications.publications,
        )
      },
    ),

    revertCache: action(
      'revertCache',
      (
        oldPublications: Array<Object>,
        oldActivePublicationId: string,
        oldActivePublicationCategory: string,
      ): void => {
        store.publications.publications = oldPublications
        store.publications.activePublicationId = oldActivePublicationId
        store.publications.activePublicationCategory = oldActivePublicationCategory
      },
    ),

    savePublication: action('savePublication', (publication: Object): void => {
      // keep old cache in case of error
      const oldPublications = store.publications.publications
      const oldActivePublicationId = store.publications.activePublicationId
      const oldActivePublicationCategory =
        store.publications.activePublicationCategory
      // optimistically update in cache
      store.publications.updatePublicationInCache(publication)
      app.db
        .put(publication)
        .then(resp => {
          // resp.rev is new rev
          publication._rev = resp.rev
          // definitely update in cache
          store.publications.updatePublicationInCache(publication)
        })
        .catch(error => {
          store.publications.revertCache(
            oldPublications,
            oldActivePublicationId,
            oldActivePublicationCategory,
          )
          app.Actions.showError({
            title: 'Error saving publication:',
            msg: error,
          })
        })
    }),

    removePublicationFromCache: action(
      'removePublicationFromCache',
      (publication: Object): void => {
        // first update the publication in store.publications.publications
        store.publications.publications = store.publications.publications.filter(
          p => p._id !== publication._id,
        )
        store.publications.publications = sortPublications(
          store.publications.publications,
        )
        // now update store.publications.activePublicationId if it is the active publication's _id
        const isActivePublication =
          store.publications.activePublicationId === publication._id
        if (isActivePublication) store.publications.activePublicationId = null
      },
    ),

    removePublication: action(
      'removePublication',
      (publication: Object): void => {
        // keep old cache in case of error
        const oldPublications = store.publications.publications
        const oldActivePublicationId = store.publications.activePublicationId
        const oldActivePublicationCategory =
          store.publications.activePublicationCategory
        // optimistically remove publication from cache
        store.publications.removePublicationFromCache(publication)
        app.db.remove(publication).catch(error => {
          // oops. Revert optimistic removal
          store.publications.revertCache(
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
    ),

    toggleDraftOfPublication: action(
      'toggleDraftOfPublication',
      (publication: Object): void => {
        if (publication.draft === true) {
          delete publication.draft
        } else {
          publication.draft = true
        }
        store.publications.savePublication(publication)
      },
    ),

    getPublicationCategories: action('getPublicationCategories', (): void => {
      const allCategories = store.publications.publications.map(
        publication => publication.category,
      )
      const publicationCategories = uniq(allCategories)
      return publicationCategories.sort()
    }),

    setPublicationCategory: action(
      'setPublicationCategory',
      (category: Object): void => {
        if (store.publications.activePublicationCategory !== category) {
          store.publications.activePublicationId = null
        }
        store.publications.activePublicationCategory = category
        const categorySlugified = slug(category)
        app.router.navigate(`/publications/${categorySlugified}`)
      },
    ),
  })
}
