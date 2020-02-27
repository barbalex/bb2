import React from 'react'
import app from 'ampersand-app'
import pouchdbUpsert from 'pouchdb-upsert'
import pouchdbAuthentication from 'pouchdb-authentication'
import { Provider as MobxProvider } from 'mobx-react'
import { Router } from '@reach/router'

import store from './store'
import couchUrl from './modules/getCouchUrl'
// make webpack import styles
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import Errors from './components/Errors'
import Header from './components/Header'
import Navbar from './components/Navbar'

import { StoreContextProvider } from './storeContext'
import Page from './components/Page'
import Events from './components/Events'
import EventsRedirect from './components/EventsRedirect'
import Articles from './components/Articles'
import Actors from './components/Actors'
import MonthlyEvents from './components/MonthlyEvents'
import Publications from './components/Publications'
import Login from './components/Login'

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
    <MobxProvider store={store}>
      <div className="container">
        <Header />
        <Navbar />
        <Router>
          <EventsRedirect path="/" />
          <Events path="/events" />
          <MonthlyEvents path="/monthlyEvents/:year/:month" />
          <MonthlyEvents path="/monthlyEvents" />
          <Articles path="/commentaries/:year/:month/:day/:title" />
          <Articles path="/articles" />
          <Actors path="/actors/:category" />
          <Actors path="/actors" />
          <Publications path="/publications/:category/:title" />
          <Publications path="/publications/:category" />
          <Publications path="/publications" />
          <Page path="/about-us" />
          <Login path="/login" />
          {/*<Redirect from="/" to="events" noThrow />*/}
        </Router>
        {errors && errors.length > 0 && <Errors />}
      </div>
    </MobxProvider>
  </StoreContextProvider>
)

export default App
