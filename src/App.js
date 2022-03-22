import React, { useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { initializeApp, getApps, getApp } from 'firebase/app'
import { ApolloProvider } from '@apollo/client'

import store from './store'
// make webpack import styles
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import Errors from './components/Errors'
import Layout from './components/Layout'
// to use in apollo
import buildClient from './apolloClient'
import getAuthToken from './modules/getAuthToken'

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

const { errors } = store

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
      // console.log('App, onAuthStateChanged, user:', user)
      store.login.setUser(user)
      getAuthToken({ store })
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
