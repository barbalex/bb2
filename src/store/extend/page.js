// @flow
import { extendObservable, action } from 'mobx'
import app from 'ampersand-app'

import getPathFromDoc from '../../modules/getPathFromDoc.js'

export default (store: Object): void => {
  extendObservable(store.page, {
    activePage: {},
    editing: false,
    showMeta: false,
    getPage: action('getPage', id => {
      const get =
        !store.page.activePage ||
        (store.page.activePage._id && store.page.activePage._id !== id)
      if (get) {
        app.db
          .get(id, { include_docs: true })
          .then(doc => {
            store.page.activePage = doc
            const path = getPathFromDoc(doc)
            app.router.navigate(`/${path}`)
          })
          .catch(error =>
            app.Actions.showError({
              title: `Error loading ${id}:`,
              msg: error
            })
          )
      }
    }),
    savePage: action('savePage', doc => {
      app.db
        .put(doc)
        .then(resp => {
          // resp.rev is new rev
          doc._rev = resp.rev
          store.page.activePage = doc
        })
        .catch(error =>
          app.Actions.showError({
            title: 'Error saving page:',
            msg: error
          })
        )
    }),
    // see: http://pouchdb.com/api.html#save_attachment > Save many attachments at once
    addPageAttachments: action('addPageAttachments', (doc, attachments) => {
      if (!doc._attachments) doc._attachments = {}
      doc._attachments = Object.assign(doc._attachments, attachments)
      store.page.savePage(doc)
    }),
    removePageAttachment: action(
      'removePageAttachment',
      (doc, attachmentId) => {
        delete doc._attachments[attachmentId]
        store.page.savePage(doc)
      }
    )
  })
}
