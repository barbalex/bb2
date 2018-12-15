// @flow
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { observer } from 'mobx-react'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import AsyncPage from './AsyncPage'
import AsyncEvents from './AsyncEvents'
import AsyncCommentaries from './AsyncCommentaries'
import AsyncActors from './AsyncActors'
import AsyncMonthlyEvents from './AsyncMonthlyEvents'
import AsyncPublications from './AsyncPublications'
import AsyncLogin from './AsyncLogin'
import Errors from './Errors'
import UpdateAvailable from './UpdateAvailable'
import NotFound from './NotFound'

/**
 * Weird thing:
 * cannot useContext to get store
 * Error is: hooks can only be used in function components...
 */
const Main = ({ store, login }: { login: boolean, store: Object }) => {
  const {
    updateAvailable,
    page,
    monthlyEvents,
    commentaries,
    actors,
    publications,
  } = store
  const { errors } = store.error

  return (
    <Router>
      <div className="container">
        <Header />
        <Navbar />
        <Switch>
          <Redirect from="/" exact to="/events" />
          <Route
            path="/events"
            render={() => {
              page.getPage('pages_events')
              return <AsyncEvents />
            }}
          />
          <Route
            path="/monthlyEvents/:year/:month"
            exact
            render={({ match }) => {
              const { year, month } = match.params
              page.getPage('pages_monthlyEvents')
              monthlyEvents.activeMonthlyEventId = `monthlyEvents_${year}_${month}`
              return <AsyncMonthlyEvents />
            }}
          />
          <Route
            path="/monthlyEvents"
            exact
            render={() => {
              page.getPage('pages_monthlyEvents')
              return <AsyncMonthlyEvents />
            }}
          />
          <Route
            path="/commentaries/:year/:month/:day/:title"
            exact
            render={({ match }) => {
              const { year, month, day, title } = match.params
              page.getPage('pages_commentaries')
              commentaries.activeCommentaryId = `commentaries_${year}_${month}_${day}_${title}`
              return <AsyncCommentaries />
            }}
          />
          <Route
            path="/commentaries"
            exact
            render={() => {
              page.getPage('pages_commentaries')
              return <AsyncCommentaries />
            }}
          />
          <Route
            path="/actors/:category"
            exact
            render={({ match }) => {
              const { category } = match.params
              page.getPage('pages_actors')
              actors.activeActorId = `actors_${category}`
              return <AsyncActors />
            }}
          />
          <Route
            path="/actors"
            exact
            render={() => {
              page.getPage('pages_actors')
              return <AsyncActors />
            }}
          />
          <Route
            path="/publications/:category/:title"
            exact
            render={({ match }) => {
              const { category, title } = match.params
              page.getPage('pages_publications')
              publications.activePublicationId = `publications_${category}_${title}`
              return <AsyncPublications />
            }}
          />
          <Route
            path="/publications/:category"
            exact
            render={() => {
              page.getPage('pages_publications')
              return <AsyncPublications />
            }}
          />
          <Route
            path="/publications"
            exact
            render={() => {
              page.getPage('pages_publications')
              return <AsyncPublications />
            }}
          />
          <Route
            path="/aboutUs"
            exact
            render={() => {
              page.getPage('pages_aboutUs')
              return <AsyncPage />
            }}
          />
          <Route path="/login" exact component={AsyncLogin} />
          <Route component={NotFound} />
        </Switch>
        {errors && errors.length > 0 && <Errors />}
        {updateAvailable && <UpdateAvailable />}
      </div>
    </Router>
  )
}

Main.displayName = 'Main'

export default observer(Main)
