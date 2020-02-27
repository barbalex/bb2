import React, { useContext, useState, useCallback } from 'react'
import {
  Navbar,
  NavItem,
  Nav,
  Glyphicon,
  Tooltip,
  OverlayTrigger,
} from 'react-bootstrap'
import has from 'lodash/has'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import oceanDarkImage from '../images/oceanDark.jpg'
import storeContext from '../storeContext'

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
  if (typeof window === `undefined`) return 750
  const documentWidth = document.getElementById('___gatsby').clientWidth
  return documentWidth <= 750
}

const MyNavbar = ({ match, location }) => {
  const store = useContext(storeContext)
  const [navExpanded, changeNavExpanded] = useState(false)

  const onToggleNav = useCallback(() => {
    const navIsMobile = isNavMobile()
    // toggle only if nav is in mobile mode
    if (navIsMobile) changeNavExpanded(!navExpanded)
  }, [navExpanded])
  const onClickEvents = useCallback(() => {
    store.page.getPage('pages_events')
    navigate('/events')
    // if home was clicked, do not toggle nav
  }, [store.page])
  const onClickArticles = useCallback(() => {
    store.page.getPage('pages_commentaries')
    navigate('/articles')
    onToggleNav()
  }, [onToggleNav, store.page])
  const onClickActors = useCallback(() => {
    store.page.getPage('pages_actors')
    navigate('/actors')
    onToggleNav()
  }, [onToggleNav, store.page])
  const onClickPublications = useCallback(() => {
    store.page.getPage('pages_publications')
    navigate('/publications')
    onToggleNav()
  }, [onToggleNav, store.page])
  const onClickAboutUs = useCallback(() => {
    store.page.getPage('pages_aboutUs')
    navigate('/about-us')
    onToggleNav()
  }, [onToggleNav, store.page])
  const onClickEdit = useCallback(() => {
    store.toggleEditing()
    onToggleNav()
  }, [onToggleNav, store])
  const onClickLogout = useCallback(() => {
    store.login.logout()
    onToggleNav()
    // need to force update
  }, [onToggleNav, store.login])
  const onClickNewArticle = useCallback(
    () => store.articles.toggleShowNewArticle(),
    [store.articles],
  )
  const onClickNewPublication = useCallback(() => {
    store.publications.setShowNewPublication(true)
  }, [store.publications])
  const onClickNewEvent = useCallback(
    () => store.events.setShowNewEvent(true),
    [store.events],
  )
  const onClickNewActor = useCallback(
    () => store.actors.setShowNewActor(true),
    [store.actors],
  )

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

export default observer(MyNavbar)
