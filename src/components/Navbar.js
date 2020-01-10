// @flow
import React from 'react'
import {
  Navbar,
  NavItem,
  Nav,
  Glyphicon,
  Tooltip,
  OverlayTrigger,
} from 'react-bootstrap'
import has from 'lodash/has'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import withState from 'recompose/withState'
import styled from 'styled-components'
import { withRouter } from 'react-router'

import oceanDarkImage from '../images/oceanDark.jpg'

const StyledNavbar = styled(Navbar)`
  p,
  div {
    font-size: medium;
  }
  margin-bottom: 0 !important;
  border-radius: 0 !important;
  background-image: url(${oceanDarkImage});
  a {
    color: #edf4f8 !important;
  }
  .navbar-brand {
    color: #edf4f8 !important;
    cursor: pointer;
  }
`

const isNavMobile = () => {
  const documentWidth = document.getElementById('root').clientWidth
  return documentWidth <= 750
}

const enhance = compose(
  inject('store'),
  withRouter,
  withState('navExpanded', 'changeNavExpanded', false),
  withHandlers({
    onToggleNav: props => () => {
      const navIsMobile = isNavMobile()
      // toggle only if nav is in mobile mode
      if (navIsMobile) props.changeNavExpanded(!props.navExpanded)
    },
  }),
  withHandlers({
    onClickEvents: props => () => {
      props.store.page.getPage('pages_events')
      props.history.push('/events')
      // if home was clicked, do not toggle nav
    },
    onClickArticles: props => () => {
      props.store.page.getPage('pages_commentaries')
      props.history.push('/articles')
      props.onToggleNav()
    },
    onClickActors: props => () => {
      props.store.page.getPage('pages_actors')
      props.history.push('/actors')
      props.onToggleNav()
    },
    onClickPublications: props => () => {
      props.store.page.getPage('pages_publications')
      props.history.push('/publications')
      props.onToggleNav()
    },
    onClickAboutUs: props => () => {
      props.store.page.getPage('pages_aboutUs')
      props.history.push('/aboutUs')
      props.onToggleNav()
    },
    onClickEdit: props => () => {
      props.store.toggleEditing()
      props.onToggleNav()
    },
    onClickLogout: props => () => {
      props.store.login.logout()
      props.onToggleNav()
      // need to force update
    },
    onClickNewArticle: props => () =>
      props.store.articles.toggleShowNewArticle(),
    onClickNewPublication: props => () => {
      props.store.publications.setShowNewPublication(true)
    },
    onClickNewEvent: props => () => props.store.events.setShowNewEvent(true),
    onClickNewActor: props => () => props.store.actors.setShowNewActor(true),
  }),
  observer,
)

const MyNavbar = ({
  store,
  match,
  location,
  history,
  navExpanded,
  onToggleNav,
  onClickEvents,
  onClickArticles,
  onClickActors,
  onClickPublications,
  onClickAboutUs,
  onClickEdit,
  onClickLogout,
  onClickNewArticle,
  onClickNewPublication,
  onClickNewEvent,
  onClickNewActor,
}: {
  store: Object,
  match: Object,
  location: Object,
  history: Object,
  navExpanded: boolean,
  onToggleNav: () => void,
  onClickEvents: () => void,
  onClickArticles: () => void,
  onClickActors: () => void,
  onClickPublications: () => void,
  onClickAboutUs: () => void,
  onClickEdit: () => void,
  onClickLogout: () => void,
  onClickNewArticle: () => void,
  onClickNewPublication: () => void,
  onClickNewEvent: () => void,
  onClickNewActor: () => void,
}) => {
  const { activePage } = store.page
  const { activeActor } = store.actors
  const { activeMonthlyEvent } = store.monthlyEvents
  const { activePublication } = store.publications
  const { activeArticle } = store.articles
  const email = store.login.email
  const glyph = store.editing ? 'eye-open' : 'pencil'
  const id = activePage && activePage._id ? activePage._id : null
  const nonEditableIds = [
    'pages_commentaries',
    'pages_monthlyEvents',
    'pages_publications',
    'pages_actors',
    'pages_events',
  ]
  const showEdit =
    email &&
    (!nonEditableIds.includes(id) ||
      has(activeMonthlyEvent, '_id') ||
      has(activeArticle, '_id') ||
      has(activeActor, '_id') ||
      has(activePublication, '_id'))
  const showAddArticle = email && activePage._id === 'pages_commentaries'
  const showAddEvent = email && activePage._id === 'pages_events'
  const showAddActor = email && activePage._id === 'pages_actors'
  const showAddPublication = email && activePage._id === 'pages_publications'
  const showNavbarRight =
    email || showEdit || showAddArticle || showAddEvent || showAddActor

  return (
    <StyledNavbar
      id="nav-wrapper"
      inverse
      fixedTop
      expanded={navExpanded}
      onToggle={onToggleNav}
    >
      <Navbar.Header>
        <Navbar.Brand onClick={onClickEvents}>Events</Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem
            active={id === 'pages_commentaries'}
            onClick={onClickArticles}
          >
            My Articles
          </NavItem>
          <NavItem active={id === 'pages_actors'} onClick={onClickActors}>
            Actors
          </NavItem>
          <NavItem
            active={id === 'pages_publications'}
            onClick={onClickPublications}
          >
            Publications
          </NavItem>
          <NavItem active={id === 'pages_aboutUs'} onClick={onClickAboutUs}>
            About us
          </NavItem>
        </Nav>
        {showNavbarRight && (
          <Nav navbar pullRight>
            {showEdit && (
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id={store.editing ? 'preview' : 'edit'}>
                    {store.editing ? 'preview' : 'edit'}
                  </Tooltip>
                }
              >
                <NavItem onClick={onClickEdit}>
                  <Glyphicon glyph={glyph} />
                </NavItem>
              </OverlayTrigger>
            )}
            {showAddArticle && (
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="newArticle">new article</Tooltip>}
              >
                <NavItem onClick={onClickNewArticle}>
                  <Glyphicon glyph="plus" />
                </NavItem>
              </OverlayTrigger>
            )}
            {showAddEvent && (
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="newEvent">new event</Tooltip>}
              >
                <NavItem onClick={onClickNewEvent}>
                  <Glyphicon glyph="plus" />
                </NavItem>
              </OverlayTrigger>
            )}
            {showAddActor && (
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="newActor">new actor</Tooltip>}
              >
                <NavItem onClick={onClickNewActor}>
                  <Glyphicon glyph="plus" />
                </NavItem>
              </OverlayTrigger>
            )}
            {showAddPublication && (
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="newPublication">new publication</Tooltip>}
              >
                <NavItem onClick={onClickNewPublication}>
                  <Glyphicon glyph="plus" />
                </NavItem>
              </OverlayTrigger>
            )}
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="logout">log out</Tooltip>}
            >
              <NavItem onClick={onClickLogout}>
                <Glyphicon glyph="log-out" />
              </NavItem>
            </OverlayTrigger>
          </Nav>
        )}
      </Navbar.Collapse>
    </StyledNavbar>
  )
}

MyNavbar.displayName = 'Navbar'

export default enhance(MyNavbar)
