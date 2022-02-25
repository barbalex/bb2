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
import { navigate } from 'gatsby'

import oceanDarkImage from '../../images/oceanDark.jpg'
import storeContext from '../../storeContext'

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

const MyNavbar = () => {
  const store = useContext(storeContext)
  const [navExpanded, changeNavExpanded] = useState(false)

  const onToggleNav = useCallback(() => {
    const navIsMobile = isNavMobile()
    // toggle only if nav is in mobile mode
    if (navIsMobile) changeNavExpanded(!navExpanded)
  }, [navExpanded])

  const onClickEvents = useCallback(() => {
    store.page.getPage('pages_events')
    navigate('/events/')
    // if home was clicked, do not toggle nav
  }, [store.page])
  const onClickArticles = useCallback(() => {
    store.page.getPage('pages_commentaries')
    navigate('/articles/')
    onToggleNav()
  }, [onToggleNav, store.page])
  const onClickSar = useCallback(() => {
    navigate('/sar/')
    onToggleNav()
  }, [onToggleNav])
  const onClickPublications = useCallback(() => {
    store.page.getPage('pages_publications')
    navigate('/publications/')
    onToggleNav()
  }, [onToggleNav, store.page])
  const onClickAboutUs = useCallback(() => {
    store.page.getPage('pages_aboutUs')
    navigate('/about-us/')
    onToggleNav()
  }, [onToggleNav, store.page])

  const onClickLogin = useCallback(() => {
    navigate('/login/')
    onToggleNav()
  }, [onToggleNav])

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

  const { activePage } = store.page
  const { activeMonthlyEvent } = store.monthlyEvents
  const { activePublication } = store.publications
  const { activeArticle } = store.articles
  const email = store.login.email
  const glyph = store.editing ? 'eye-open' : 'pencil'
  const id = activePage && activePage?._id ? activePage?._id : null
  const nonEditableIds = [
    'pages_commentaries',
    'pages_monthlyEvents',
    'pages_publications',
    'pages_events',
  ]
  const showEdit =
    !!email &&
    (!nonEditableIds.includes(id) ||
      has(activeMonthlyEvent, '_id') ||
      has(activeArticle, '_id') ||
      has(activePublication, '_id'))
  const showAddArticle = !!email && activePage?._id === 'pages_commentaries'
  const showAddEvent = !!email && activePage?._id === 'pages_events'
  const showAddPublication = !!email && activePage?._id === 'pages_publications'

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
          <NavItem active={id === 'pages_sar'} onClick={onClickSar}>
            SAR NGOs
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

          {!email && <NavItem onClick={onClickLogin}>log in</NavItem>}
          {!!email && (
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="logout">log out</Tooltip>}
            >
              <NavItem onClick={onClickLogout}>
                <Glyphicon glyph="log-out" />
              </NavItem>
            </OverlayTrigger>
          )}
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  )
}

export default observer(MyNavbar)
