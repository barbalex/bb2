// @flow
import { extendObservable, action } from 'mobx'
import app from 'ampersand-app'

import getPathFromDocId from '../../modules/getPathFromDocId'

export default (store: Object): void => {
  extendObservable(store.page, {
    activePage: {},
    editing: false,
    showMeta: false,
    getPage: action('getPage', (id: string): void => {
      const get =
        !store.page.activePage._id ||
        (store.page.activePage._id && store.page.activePage._id !== id)
      if (get) {
        app.db
          .get(id, { include_docs: true })
          .then(doc => {
            store.page.activePage = doc
            const path = getPathFromDocId(id)
            app.router.navigate(`/${path}`)
          })
          .catch(error =>
            store.error.showError({
              title: `Error loading ${id}:`,
              msg: error,
            })
          )
      }
    }),
    savePage: action('savePage', (doc: Object): void =>
      app.db
        .put(doc)
        .then(resp => {
          // resp.rev is new rev
          doc._rev = resp.rev
          store.page.activePage = doc
        })
        .catch(error =>
          store.error.showError({
            title: 'Error saving page:',
            msg: error,
          })
        )
    ),
    // see: http://pouchdb.com/api.html#save_attachment > Save many attachments at once
    addPageAttachments: action(
      'addPageAttachments',
      (doc: Object, attachments: Object): void => {
        if (!doc._attachments) doc._attachments = {}
        // doc._attachments = Object.assign(doc._attachments, attachments)
        doc._attachments = { ...doc._attachments, ...attachments }
        store.page.savePage(doc)
      }
    ),
    removePageAttachment: action(
      'removePageAttachment',
      (doc: Object, attachmentId: string): void => {
        delete doc._attachments[attachmentId]
        store.page.savePage(doc)
      }
    ),
  })
}
