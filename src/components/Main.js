// @flow
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Page from './Page'
import Events from './Events'
import Commentaries from './Commentaries'
import Actors from './Actors'
import MonthlyEvents from './MonthlyEvents'
import Publications from './Publications'
import Login from './Login'
import Errors from './Errors'
import NotFound from './NotFound'

const enhance = compose(inject(`store`), observer)

const Main = ({ store, login }: { store: Object, login: boolean }) => {
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
              store.page.getPage('pages_events')
              return <Events />
            }}
          />
          <Route
            path="/monthlyEvents/:year/:month"
            render={({ match }) => {
              const { year, month } = match.params
              store.page.getPage('pages_monthlyEvents')
              store.monthlyEvents.activeMonthlyEventId = `monthlyEvents_${year}_${month}`
              return <MonthlyEvents />
            }}
          />
          <Route
            path="/monthlyEvents"
            render={() => {
              store.page.getPage('pages_monthlyEvents')
              return <MonthlyEvents />
            }}
          />
          <Route
            path="/commentaries/:year/:month/:day/:title"
            render={({ match }) => {
              const { year, month, day, title } = match.params
              store.page.getPage('pages_commentaries')
              store.commentaries.activeCommentaryId = `commentaries_${year}_${month}_${day}_${title}`
              return <Commentaries />
            }}
          />
          <Route
            path="/commentaries"
            render={() => {
              store.page.getPage('pages_commentaries')
              return <Commentaries />
            }}
          />
          <Route
            path="/actors/:category"
            render={({ match }) => {
              const { category } = match.params
              store.page.getPage('pages_actors')
              store.actors.activeActorId = `actors_${category}`
              return <Actors />
            }}
          />
          <Route
            path="/actors"
            render={() => {
              store.page.getPage('pages_actors')
              return <Actors />
            }}
          />
          <Route
            path="/publications/:category/:title"
            render={({ match }) => {
              const { category, title } = match.params
              store.page.getPage('pages_publications')
              store.publications.activePublicationId = `publications_${category}_${title}`
              return <Publications />
            }}
          />
          <Route
            path="/publications"
            render={() => {
              store.page.getPage('pages_publications')
              return <Publications />
            }}
          />
          <Route
            path="/links"
            render={() => {
              store.page.getPage('pages_links')
              return <Page />
            }}
          />
          <Route
            path="/aboutUs"
            render={() => {
              store.page.getPage('pages_aboutUs')
              return <Page />
            }}
          />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
        {errors && errors.length > 0 && <Errors />}
      </div>
    </Router>
  )
}

Main.displayName = 'Main'

export default enhance(Main)
