// @flow

import app from 'ampersand-app'
import React from 'react'
import {
  Navbar,
  NavItem,
  Nav,
  Glyphicon,
  Tooltip,
  OverlayTrigger
} from 'react-bootstrap'
import has from 'lodash/has'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import withState from 'recompose/withState'

const isNavMobile = () => {
  const documentWidth = document.getElementById('root').clientWidth
  return documentWidth <= 750
}

const enhance = compose(
  withState('navExpanded', 'changeNavExpanded', false),
  withHandlers({
    onToggleNav: props => () => {
      const navIsMobile = isNavMobile()
      // toggle only if nav is in mobile mode
      if (navIsMobile) props.changeNavExpanded(!props.navExpanded)
    }
  }),
  withHandlers({
    onClickPage: props => id => {
      app.Actions.getPage(id)
      // if home was clicked, do not toggle nav
      if (id !== 'pages_events') props.onToggleNav()
    },
    onClickEdit: props => () => {
      props.onClickEdit()
      props.onToggleNav()
    },
    onClickLogout: props => () => {
      app.Actions.logout()
      props.onToggleNav()
    }
  })
)

const MyNavbar = ({
  activePage,
  activeMonthlyEvent,
  activePublication,
  activeCommentary,
  activeActor,
  email,
  editing,
  onClickEdit,
  onClickNewCommentary,
  onClickNewEvent,
  onClickNewActor,
  onClickNewMonthlyEvent,
  onClickNewPublication,
  onClickPage,
  onClickLogout,
  onToggleNav,
  navExpanded
}: {
  activePage: Object,
  activeMonthlyEvent: Object,
  activePublication: Object,
  activeCommentary: Object,
  activeActor: Object,
  email: string,
  editing: boolean,
  onClickEdit: () => void,
  onClickNewCommentary: () => void,
  onClickNewEvent: () => void,
  onClickNewActor: () => void,
  onClickNewMonthlyEvent: () => void,
  onClickNewPublication: () => void,
  onClickPage: () => void,
  onClickLogout: () => void,
  onToggleNav: () => void,
  navExpanded: boolean
}) => {
  const glyph = editing ? 'eye-open' : 'pencil'
  const id = activePage && activePage._id ? activePage._id : null
  const nonEditableIds = [
    'pages_commentaries',
    'pages_monthlyEvents',
    'pages_publications',
    'pages_actors',
    'pages_events'
  ]
  const showEdit =
    email &&
    (!nonEditableIds.includes(id) ||
      has(activeMonthlyEvent, '_id') ||
      has(activeCommentary, '_id') ||
      has(activeActor, '_id') ||
      has(activePublication, '_id'))
  const showAddCommentary = email && activePage._id === 'pages_commentaries'
  const showAddEvent = email && activePage._id === 'pages_events'
  const showAddActor = email && activePage._id === 'pages_actors'
  const showAddMonthlyEvent = email && activePage._id === 'pages_monthlyEvents'
  const showAddPublication = email && activePage._id === 'pages_publications'
  const showNavbarRight =
    email ||
    showEdit ||
    showAddCommentary ||
    showAddEvent ||
    showAddActor ||
    showAddMonthlyEvent

  return (
    <Navbar
      id="nav-wrapper"
      inverse
      fixedTop
      expanded={navExpanded}
      onToggle={onToggleNav}
    >
      <Navbar.Header>
        <Navbar.Brand onClick={() => onClickPage('pages_events')}>
          Events
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem
            active={id === 'pages_commentaries'}
            onClick={() => onClickPage('pages_commentaries')}
          >
            Commentaries
          </NavItem>
          <NavItem
            active={id === 'pages_actors'}
            onClick={() => onClickPage('pages_actors')}
          >
            Actors
          </NavItem>
          <NavItem
            active={id === 'pages_publications'}
            onClick={() => onClickPage('pages_publications')}
          >
            Publications
          </NavItem>
          <NavItem
            active={id === 'pages_links'}
            onClick={() => onClickPage('pages_links')}
          >
            Links
          </NavItem>
          <NavItem
            active={id === 'pages_aboutUs'}
            onClick={() => onClickPage('pages_aboutUs')}
          >
            About us
          </NavItem>
        </Nav>
        {showNavbarRight &&
          <Nav navbar pullRight>
            {showEdit &&
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id={editing ? 'preview' : 'edit'}>
                    {editing ? 'preview' : 'edit'}
                  </Tooltip>
                }
              >
                <NavItem onClick={onClickEdit}>
                  <Glyphicon glyph={glyph} />
                </NavItem>
              </OverlayTrigger>}
            {showAddCommentary &&
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="newCommentary">
                    new commentary
                  </Tooltip>
                }
              >
                <NavItem onClick={onClickNewCommentary}>
                  <Glyphicon glyph="plus" />
                </NavItem>
              </OverlayTrigger>}
            {showAddEvent &&
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="newEvent">
                    new event
                  </Tooltip>
                }
              >
                <NavItem onClick={onClickNewEvent}>
                  <Glyphicon glyph="plus" />
                </NavItem>
              </OverlayTrigger>}
            {showAddActor &&
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="newActor">
                    new actor
                  </Tooltip>
                }
              >
                <NavItem onClick={onClickNewActor}>
                  <Glyphicon glyph="plus" />
                </NavItem>
              </OverlayTrigger>}
            {showAddMonthlyEvent &&
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="newMonthlyEvent">
                    new monthly event
                  </Tooltip>
                }
              >
                <NavItem onClick={onClickNewMonthlyEvent}>
                  <Glyphicon glyph="plus" />
                </NavItem>
              </OverlayTrigger>}
            {showAddPublication &&
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="newPublication">
                    new publication
                  </Tooltip>
                }
              >
                <NavItem onClick={onClickNewPublication}>
                  <Glyphicon glyph="plus" />
                </NavItem>
              </OverlayTrigger>}
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="logout">
                  log out
                </Tooltip>
              }
            >
              <NavItem onClick={onClickLogout}>
                <Glyphicon glyph="log-out" />
              </NavItem>
            </OverlayTrigger>
          </Nav>}
      </Navbar.Collapse>
    </Navbar>
  )
}

MyNavbar.displayName = 'Navbar'

export default enhance(MyNavbar)
