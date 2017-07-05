// @flow
import app from 'ampersand-app'
import Router from 'ampersand-router'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import Main from './components/Main'

export default Router.extend({
  routes: {
    '': 'home',
    home: 'home',
    aboutUs: 'aboutUs',
    links: 'links',
    'european-union-publications': 'europeanUnionPublications',
    'io-and-ngo-publications': 'ioAndNgoPublications',
    commentaries: 'commentaries',
    'commentaries/:year/:month/:day/:title': 'commentary',
    monthlyEvents: 'monthlyEvents',
    'monthlyEvents/:year/:month': 'monthlyEvent',
    publications: 'publications',
    'publications/:category': 'publicationCategory',
    'publications/:category/:title': 'publication',
    actors: 'actors',
    'actors/:category': 'actor',
    login: 'login',
    '*path': 'home',
  },

  home() {
    const id = 'pages_events'
    this.render(id)
  },

  aboutUs() {
    const id = 'pages_aboutUs'
    this.render(id)
  },

  links() {
    const id = 'pages_links'
    this.render(id)
  },

  commentaries() {
    const id = 'pages_commentaries'
    this.render(id)
  },

  commentary(year, month, day, title) {
    const id = `commentaries_${year}_${month}_${day}_${title}`
    this.render()
    app.store.page.getPage('pages_commentaries')
    app.store.commentaries.getCommentary(id)
  },

  monthlyEvents() {
    const id = 'pages_monthlyEvents'
    this.render(id)
  },

  monthlyEvent(year, month) {
    const id = `monthlyEvents_${year}_${month}`
    this.render()
    app.store.page.getPage('pages_monthlyEvents')
    app.store.monthlyEvents.getMonthlyEvent(id)
  },

  publications() {
    const id = 'pages_publications'
    this.render(id)
  },

  publicationCategory() {
    // we dont first load categories - just load publications
    const id = 'pages_publications'
    this.render(id)
  },

  publication(category, title) {
    const id = `publications_${category}_${title}`
    this.render()
    app.store.page.getPage('pages_publications')
    app.store.publications.getPublication(id)
  },

  actors() {
    const id = 'pages_actors'
    this.render(id)
  },

  actor(category) {
    const id = `actors_${category}`
    this.render()
    app.store.page.getPage('pages_actors')
    app.store.actors.getActor(id)
  },

  login() {
    ReactDOM.render(
      <Provider store={app.store}>
        <Main login />
      </Provider>,
      document.getElementById('root')
    )
  },

  render(id) {
    ReactDOM.render(
      <Provider store={app.store}>
        <Main />
      </Provider>,
      document.getElementById('root')
    )
    if (id) app.store.page.getPage(id)
  },
})
