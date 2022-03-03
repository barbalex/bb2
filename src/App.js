import React, { useEffect } from 'react'
import app from 'ampersand-app'
import pouchdbUpsert from 'pouchdb-upsert'
import pouchdbAuthentication from 'pouchdb-authentication'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { initializeApp, getApps, getApp } from 'firebase/app'
import { ApolloProvider } from '@apollo/client'
import { navigate } from '@reach/router'

import store from './store'
import couchUrl from './modules/getCouchUrl'
// make webpack import styles
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import Errors from './components/Errors'
import Layout from './components/Layout'
// to use in apollo
import buildClient from './apolloClient'

import { StoreContextProvider } from './storeContext'

let PouchDB = null
if (typeof window !== 'undefined') {
  // need to import pouchdb only client side or gatsby will not build
  // TODO: this breaks dev!!!!!!!!!
  // because then happens AFTER first calls to db from events form!!!!!!
  import('pouchdb').then((pouchdb) => {
    PouchDB = pouchdb.default
    /**
     * set up pouchdb plugins
     */
    PouchDB.plugin(pouchdbUpsert)
    PouchDB.plugin(pouchdbAuthentication)
    // expose 'app' to the browser console
    window.app = app
    /**
     * ampersand-app is extended with app methods (=singleton)
     * modules that need an app method import ampersand-app instead of using a global
     */
    app.extend({
      init() {
        this.store = store
        try {
          this.db = new PouchDB(couchUrl())
        } catch (error) {
          console.log('error creating PouchDB:', error.message)
        }
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

// Configure Firebase
const firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  appId: process.env.GATSBY_FIREBASE_APP_ID,
}

// BEWARE: The redirect caused the app to ALWAYS redirect when it was refreshed
// and also when it was opened at a sub-route like /login
const App = ({ element }) => {
  const client = buildClient({ store })

  useEffect(() => {
    let fbApp
    // catch app already existing
    // https://stackoverflow.com/a/48686803/712005
    if (!getApps().length) {
      fbApp = initializeApp(firebaseConfig)
    } else {
      fbApp = getApp() // if already initialized, use that one
    }
    const auth = getAuth(fbApp)
    store.login.setFirebaseAuth(auth)
    const unregisterAuthObserver = onAuthStateChanged(auth, async (user) => {
      // BEWARE: this is called at least twice
      // https://stackoverflow.com/questions/37673616/firebase-android-onauthstatechanged-called-twice
      if (store.login?.user?.uid) return
      if (!user) return
      console.log('App, onAuthStateChanged, user:', user)
      store.login.setUser(user)
      navigate('/events')
    })

    return () => {
      unregisterAuthObserver()
    }
  }, [])

  return (
    <ApolloProvider client={client}>
      <StoreContextProvider value={store}>
        <div className="container">
          <Layout>
            {element}
            {!!errors && errors.length > 0 && <Errors />}
          </Layout>
        </div>
      </StoreContextProvider>
    </ApolloProvider>
  )
}

export default App
