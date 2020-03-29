//
import { action } from 'mobx'
import app from 'ampersand-app'

export default store => ({
  activePage: {},
  editing: false,
  showMeta: false,
  getPage: action('getPage', async id => {
    const get =
      !store.page.activePage._id ||
      (store.page.activePage._id && store.page.activePage._id !== id)
    if (get) {
      let doc
      try {
        doc = await app.db.get(id, { include_docs: true })
      } catch (error) {
        store.error.showError({
          title: `Error loading ${id}:`,
          msg: error,
        })
      }
      store.page.activePage = doc
    }
  }),
  savePage: action('savePage', async doc => {
    let resp
    try {
      resp = await app.db.put(doc)
    } catch (error) {
      store.error.showError({
        title: 'Error saving page:',
        msg: error,
      })
    }
    // resp.rev is new rev
    doc._rev = resp.rev
    store.page.activePage = doc
    // get doc again -
    // otherwise removing attachment does not update
    store.page.activePage = await app.db.get(doc._id)
  }),
  // see: http://pouchdb.com/api.html#save_attachment > Save many attachments at once
  addPageAttachments: action('addPageAttachments', (doc, attachments) => {
    if (!doc._attachments) doc._attachments = {}
    doc._attachments = { ...doc._attachments, ...attachments }
    store.page.savePage(doc)
  }),
  removePageAttachment: action('removePageAttachment', (doc, attachmentId) => {
    delete doc._attachments[attachmentId]
    store.page.savePage(doc)
  }),
})
