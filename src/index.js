import React from 'react'
import ReactDOM from 'react-dom'
import app from 'ampersand-app'
import PouchDB from 'pouchdb'
import pouchdbUpsert from 'pouchdb-upsert'
import pouchdbAuthentication from 'pouchdb-authentication'
import { Provider as MobxProvider } from 'mobx-react'

import Main from './components/Main'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import couchUrl from './modules/getCouchUrl'
// make webpack import styles
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

import { StoreContextProvider } from './storeContext'

// some old browsers can't deal with ArrayBuffer
// pouchdb needs it
// give the users an explanation instead of an empty page
// also: MobX needs proxies
// sadly does not work because of other errors
if (
  typeof window !== `undefined` &&
  (!window.ArrayBuffer || window.Proxy === undefined)
) {
  window.alert(
    `mediterranean-migration.com nutzt moderne Technologien, welche von Ihrem Browser nicht unterstützt werden.

Bitte versuchen Sie es mit einer aktuellen Version von (zum Beispiel):
- Chrome
- Firefox
- Safari
- Edge`,
  )
}

registerServiceWorker(store)

/**
 * set up pouchdb plugins
 */
PouchDB.plugin(pouchdbUpsert)
PouchDB.plugin(pouchdbAuthentication)

// expose 'app' to the browser console
if (typeof window !== `undefined`) window.app = app
/**
 * enable pouch inspector in chrome
 * (https://chrome.google.com/webstore/detail/pouchdb-inspector/hbhhpaojmpfimakffndmpmpndcmonkfa)
 */
if (typeof window !== `undefined`) window.PouchDB = PouchDB

/**
 * ampersand-app is extended with app methods (=singleton)
 * modules that need an app method import ampersand-app instead of using a global
 */
app.extend({
  init() {
    this.store = store
    this.db = new PouchDB(couchUrl())
  },
})
app.init()

ReactDOM.render(
  <StoreContextProvider value={store}>
    <MobxProvider store={store}>
      <Main store={store} />
    </MobxProvider>
  </StoreContextProvider>,
  document.getElementById('root'),
)
