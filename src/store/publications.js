//
import { action } from 'mobx'
import app from 'ampersand-app'
import { Base64 } from 'js-base64'
import slug from 'speakingurl'
import uniq from 'lodash/uniq'
import { navigate } from '@reach/router'

import getPublications from '../modules/getPublications'
import getPathFromDocId from '../modules/getPathFromDocId'
import sortPublications from '../modules/sortPublications'
import slugOptions from '../modules/slugOptions'

export default store => ({
  publications: [],

  activePublicationCategory: null,

  activePublicationId: null,

  get activePublication() {
    return (
      store.publications.publications.find(
        publication =>
          publication._id === store.publications.activePublicationId,
      ) || null
    )
  },

  getPublicationsCallback: null,

  getPublications: action('getPublications', async () => {
    try {
      const publications = await getPublications(store)
      store.publications.publications = publications
      if (store.publications.getPublicationsCallback) {
        store.publications.getPublicationsCallback()
        store.publications.getPublicationsCallback = null
      }
    } catch (error) {
      store.error.showError({
        msg: error,
      })
    }
  }),

  newPublication: action('newPublication', (category, title) => {
    const titleSlugified = slug(title)
    const categorySlugified = slug(category, slugOptions)
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
  }),
  showNewPublication: null,

  setShowNewPublication: action('setShowNewPublication', show => {
    store.publications.showNewPublication = show
  }),

  getPublication: action('getPublication', id => {
    if (!id) {
      navigate('/publications')
      store.publications.activePublicationId = null
    } else {
      store.publications.activePublicationId = id
      const path = getPathFromDocId(id)
      navigate(`/${path}`)
    }
  }),

  updatePublicationInCache: action('updatePublicationInCache', publication => {
    // first update the publication in store.publications.publications
    store.publications.publications = store.publications.publications.filter(
      p => p._id !== publication._id,
    )
    store.publications.publications.push(publication)
    store.publications.publications = sortPublications(
      store.publications.publications,
    )
  }),

  revertCache: action(
    'revertCache',
    (oldPublications, oldActivePublicationId, oldActivePublicationCategory) => {
      store.publications.publications = oldPublications
      store.publications.activePublicationId = oldActivePublicationId
      store.publications.activePublicationCategory = oldActivePublicationCategory
    },
  ),

  savePublication: action('savePublication', async publication => {
    // keep old cache in case of error
    const oldPublications = store.publications.publications
    const oldActivePublicationId = store.publications.activePublicationId
    const oldActivePublicationCategory =
      store.publications.activePublicationCategory
    // optimistically update in cache
    store.publications.updatePublicationInCache(publication)
    try {
      const resp = await app.db.put(publication)
      // resp.rev is new rev
      publication._rev = resp.rev
      // definitely update in cache
      store.publications.updatePublicationInCache(publication)
    } catch (error) {
      store.publications.revertCache(
        oldPublications,
        oldActivePublicationId,
        oldActivePublicationCategory,
      )
      store.error.showError({
        title: 'Error saving publication:',
        msg: error,
      })
    }
  }),

  removePublicationFromCache: action(
    'removePublicationFromCache',
    publication => {
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

  removePublication: action('removePublication', publication => {
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
      store.error.showError({
        title: 'Error removing publication:',
        msg: error,
      })
    })
  }),

  toggleDraftOfPublication: action('toggleDraftOfPublication', publication => {
    if (publication.draft === true) {
      delete publication.draft
    } else {
      publication.draft = true
    }
    store.publications.savePublication(publication)
  }),

  getPublicationCategories: action('getPublicationCategories', () => {
    const allCategories = store.publications.publications.map(
      publication => publication.category,
    )
    const publicationCategories = uniq(allCategories)
    return publicationCategories.sort()
  }),

  setPublicationCategory: action('setPublicationCategory', category => {
    if (store.publications.activePublicationCategory !== category) {
      store.publications.activePublicationId = null
    }
    store.publications.activePublicationCategory = category
    const categorySlugified = slug(category)
    navigate(`/publications/${categorySlugified}`)
  }),
})
