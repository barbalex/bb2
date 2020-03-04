import React from 'react'
import app from 'ampersand-app'
import pouchdbUpsert from 'pouchdb-upsert'
import pouchdbAuthentication from 'pouchdb-authentication'
import { Router, Redirect } from '@reach/router'

import store from './store'
import couchUrl from './modules/getCouchUrl'
// make webpack import styles
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import Errors from './components/Errors'
import Layout from './components/Layout'

import { StoreContextProvider } from './storeContext'

let PouchDB = null
if (typeof window !== `undefined`) {
  // need to import pouchdb only client side or gatsby will not build
  import('pouchdb').then(pouchdb => {
    PouchDB = pouchdb.default
    /**
     * set up pouchdb plugins
     */
    PouchDB.plugin(pouchdbUpsert)
    PouchDB.plugin(pouchdbAuthentication)
    // expose 'app' to the browser console
    window.app = app
    /**
     * enable pouch inspector in chrome
     * (https://chrome.google.com/webstore/detail/pouchdb-inspector/hbhhpaojmpfimakffndmpmpndcmonkfa)
     */
    window.PouchDB = PouchDB
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
  })
}

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

const { errors } = store.error

const App = ({ element }) => (
  <StoreContextProvider value={store}>
    <div className="container">
      <Layout>
        <Router>
          <Redirect path="/" from="/" to="events" noThrow />
        </Router>
        {element}
        {errors && errors.length > 0 && <Errors />}
      </Layout>
    </div>
  </StoreContextProvider>
)

export default App
