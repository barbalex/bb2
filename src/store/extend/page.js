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
        !store.activePage ||
        (store.activePage._id && store.activePage._id !== id)
      if (get) {
        app.db
          .get(id, { include_docs: true })
          .then(doc => {
            store.activePage = doc
            const path = getPathFromDoc(doc)
            app.router.navigate(`/${path}`)
            store.trigger(doc)
          })
          .catch(error =>
            app.Actions.showError({
              title: `Error loading ${id}:`,
              msg: error
            })
          )
      }
    }),
    savePage: action('savePage', () => {}),
    addPageAttachments: action('addPageAttachments', () => {}),
    removePageAttachment: action('removePageAttachment', () => {}),
    onSavePage: null
  })
}
