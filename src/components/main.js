// @flow
import React from 'react'
import DocumentTitle from 'react-document-title'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'

import NavHelper from '../components/navHelper.js'
import Header from '../components/header.js'
import Navbar from '../components/navbar.js'
import Page from './pages/page.js'
import Events from './events/events.js'
import Commentaries from './commentaries/commentaries.js'
import Actors from './actors/actors.js'
import MonthlyEvents from './monthlyEvents/monthlyEvents.js'
import Publications from './publications/publications.js'
import Login from './login/login.js'
import Errors from './errors.js'
import getPageNameFromDoc from '../modules/getPageNameFromDoc.js'

const enhance = compose(inject(`store`), observer)

const Main = ({
  store,
  login,
}: {
  store: Object,
  login: boolean,
}) => {
  const { activePage } = store.page
  const nonSimplePages = [
    'pages_commentaries',
    'pages_monthlyEvents',
    'pages_publications',
    'pages_events',
  ]
  const isSimplePage =
    activePage.type &&
    activePage.type === 'pages' &&
    !nonSimplePages.includes(activePage._id)
  const isCommentariesPage =
    activePage.type &&
    activePage.type === 'pages' &&
    activePage._id === 'pages_commentaries'
  const isEventsPage =
    activePage.type &&
    activePage.type === 'pages' &&
    activePage._id === 'pages_events'
  const isActorPage =
    activePage.type &&
    activePage.type === 'pages' &&
    activePage._id === 'pages_actors'
  const isMonthlyEventsPage =
    activePage.type &&
    activePage.type === 'pages' &&
    activePage._id === 'pages_monthlyEvents'
  const isPublicationsPage =
    activePage.type &&
    activePage.type === 'pages' &&
    activePage._id === 'pages_publications'
  const isCommentary = activePage.type && activePage.type === 'commentaries'
  const isActor = activePage.type && activePage.type === 'actors'
  const showCommentaryPage = isCommentariesPage || isCommentary
  const showEventsPage = isEventsPage
  const showActorPage = isActorPage || isActor
  const isMonthlyEvent = activePage.type && activePage.type === 'monthlyEvents'
  const showMonthlyEventsPage = isMonthlyEventsPage || isMonthlyEvent
  const isPublication = activePage.type && activePage.type === 'publications'
  const showPublicationsPage = isPublicationsPage || isPublication
  const pageName = getPageNameFromDoc(activePage)
  const pageTitle = `blue-borders | ${pageName}`
  const pagesWitCopyright = ['pages_commentaries']
  const showCopyright =
    activePage.type &&
    activePage.type === 'pages' &&
    pagesWitCopyright.includes(activePage._id)
  const { errors } = store.error

  return (
    <DocumentTitle title={pageTitle}>
      <NavHelper>
        <Header />
        <Navbar />
        <div className="container">
          {errors && errors.length > 0 && <Errors />}
          {isSimplePage && <Page />}
          {showEventsPage && <Events />}
          {showCommentaryPage && <Commentaries />}
          {showActorPage && <Actors />}
          {showMonthlyEventsPage && <MonthlyEvents />}
          {showPublicationsPage && <Publications />}
          {login && !store.login.email && <Login />}
          {showCopyright &&
            <p style={{ marginTop: 70 }}>
              © Jürg Martin Gabriel. All Rights Reserved.
            </p>}
        </div>
      </NavHelper>
    </DocumentTitle>
  )
}

Main.displayName = 'Main'

export default enhance(Main)
