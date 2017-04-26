// @flow
import app from 'ampersand-app'
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
  activePage,
  monthlyEvents,
  activeMonthlyEvent,
  publications,
  activePublicationCategory,
  activePublication,
  commentaries,
  activeCommentary,
  events,
  yearsOfEvents,
  activeEvent,
  actors,
  activeActor,
  editing,
  showNewCommentary,
  showNewEvent,
  showNewActor,
  showNewMonthlyEvent,
  showNewPublication,
  login,
  email,
  errors,
  activeEventYears,
}: {
  store: Object,
  activePage: Object,
  monthlyEvents: Array<Object>,
  activeMonthlyEvent: Object,
  publications: Array<Object>,
  activePublicationCategory: string,
  activePublication: Object,
  commentaries: Array<Object>,
  activeCommentary: Object,
  events: Array<Object>,
  yearsOfEvents: Array<number>,
  activeEvent: Object,
  actors: Array<Object>,
  activeActor: Object,
  editing: boolean,
  showNewCommentary: boolean,
  showNewEvent: boolean,
  showNewActor: boolean,
  showNewMonthlyEvent: boolean,
  showNewPublication: boolean,
  login: boolean,
  email: string,
  errors: Array<Object>,
  activeEventYears: Array<number>,
}) => {
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
  const showErrors = errors && errors.length > 0

  return (
    <DocumentTitle title={pageTitle}>
      <NavHelper>
        <Header />
        <Navbar
          activePage={activePage}
          activeMonthlyEvent={activeMonthlyEvent}
          activePublication={activePublication}
          activeCommentary={activeCommentary}
          activeActor={activeActor}
          email={email}
          editing={editing}
          onClickEdit={onClickEdit}
          onClickNewEvent={onClickNewEvent}
          onClickNewActor={onClickNewActor}
          onClickNewMonthlyEvent={onClickNewMonthlyEvent}
          onClickNewPublication={onClickNewPublication}
        />
        <div className="container">
          {showErrors && <Errors errors={errors} />}
          {isSimplePage && <Page activePage={activePage} editing={editing} />}
          {showEventsPage &&
            <Events
              yearsOfEvents={yearsOfEvents}
              editing={editing}
              email={email}
              activeEvent={activeEvent}
              showNewEvent={showNewEvent}
              activeEventYears={activeEventYears}
              setActiveEventYears={setActiveEventYears}
            />}
          {showCommentaryPage &&
            <Commentaries
              commentaries={commentaries}
              activeCommentary={activeCommentary}
              editing={editing}
              email={email}
              onSaveCommentaryArticle={onSaveCommentaryArticle}
              showNewCommentary={showNewCommentary}
            />}
          {showActorPage &&
            <Actors
              actors={actors}
              activeActor={activeActor}
              editing={editing}
              email={email}
              onSaveActorArticle={onSaveActorArticle}
              showNewActor={showNewActor}
            />}
          {showMonthlyEventsPage &&
            <MonthlyEvents
              monthlyEvents={monthlyEvents}
              activeMonthlyEvent={activeMonthlyEvent}
              editing={editing}
              email={email}
              onSaveMonthlyEventArticle={onSaveMonthlyEventArticle}
              showNewMonthlyEvent={showNewMonthlyEvent}
              onCloseNewMonthlyEvent={onCloseNewMonthlyEvent}
            />}
          {showPublicationsPage &&
            <Publications
              publications={publications}
              activePublicationCategory={activePublicationCategory}
              activePublication={activePublication}
              editing={editing}
              email={email}
              onSavePublicationArticle={onSavePublicationArticle}
              showNewPublication={showNewPublication}
              onCloseNewPublication={onCloseNewPublication}
            />}
          {login && <Login email={email} />}
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

React.createClass({
  onClickEdit() {
    let { editing } = this.state
    editing = !editing
    this.setState({ editing })
  },

  onClickNewEvent() {
    this.setState({ showNewEvent: true })
  },

  onClickNewActor() {
    this.setState({ showNewActor: true })
  },

  onClickNewMonthlyEvent() {
    this.setState({ showNewMonthlyEvent: true })
  },

  onClickNewPublication() {
    this.setState({ showNewPublication: true })
  },

  onCloseNewMonthlyEvent() {
    this.setState({ showNewMonthlyEvent: false })
  },

  onCloseNewPublication() {
    this.setState({ showNewPublication: false })
  },

  onSaveMonthlyEventArticle(articleEncoded) {
    const { activeMonthlyEvent } = this.state
    activeMonthlyEvent.article = articleEncoded
    app.Actions.saveMonthlyEvent(activeMonthlyEvent)
  },

  onSavePublicationArticle(articleEncoded) {
    const { activePublication } = this.state
    activePublication.article = articleEncoded
    app.Actions.savePublication(activePublication)
  },

  onSaveCommentaryArticle(articleEncoded) {
    const { activeCommentary } = this.state
    activeCommentary.article = articleEncoded
    app.Actions.saveCommentary(activeCommentary)
  },

  onSaveActorArticle(articleEncoded) {
    const { activeActor } = this.state
    activeActor.article = articleEncoded
    app.Actions.saveActor(activeActor)
  },

  setActiveEventYears(activeEventYears) {
    this.setState({ activeEventYears })
  },

  render() {},
})
