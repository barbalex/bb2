/**
 * using Redirect caused weird errors
 * so redirecting using navigate
 * Also: need to have all the pages code here,
 * else there would be scroll problems if redirected from empty page
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ButtonGroup, Button } from 'react-bootstrap'
import moment from 'moment'
import debounce from 'lodash/debounce'
import min from 'lodash/min'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import styled from 'styled-components'
import DocumentTitle from 'react-document-title'
import { navigate } from '@reach/router'

import IntroJumbotron from '../components/Events/IntroJumbotron'
import NewEvent from '../components/Events/NewEvent'
import EditEvent from '../components/Events/EditEvent'
import ModalRemoveEvent from '../components/Events/ModalRemoveEvent'
import EventsTable from '../components/Events/EventsTable'

const Container = styled.div`
  position: relative !important;
  p,
  div {
    font-size: medium;
  }
  p.event-weather {
    position: relative !important;
  }
  li.event-weather {
    list-style-type: none !important;
  }

  p.event-statistics,
  p.event-monthlyStatistics {
    position: relative;
  }
  li.event-statistics,
  li.event-monthlyStatistics {
    list-style-type: none;
  }
  p.event-victims {
    position: relative;
  }
  li.event-victims {
    list-style-type: none;
  }
  p.event-highlighted {
    position: relative;
  }
  li.event-highlighted {
    list-style-type: none;
  }
`
const YearButtonsContainer = styled.div`
  text-align: center;
`

const enhance = compose(
  inject('store'),
  withState('docToRemove', 'changeDocToRemove', null),
  withState('introJumbotronHeight', 'changeIntroJumbotronHeight', null),
  observer,
)

class Events extends Component {
  componentDidMount() {
    window.scroll({ top: 0 })
    const { store } = this.props
    store.page.getPage('pages_events')
    store.events.getEvents([parseInt(moment().format('YYYY'), 0)])
    store.yearsOfEvents.getYearsOfEvents()
    this.setIntroComponentsHeight()
    if (typeof window !== `undefined`) {
      window.addEventListener(
        'resize',
        debounce(this.setIntroComponentsHeight, 50),
      )
    }
    navigate('/events')
  }

  componentWillUnmount() {
    if (typeof window !== `undefined`) {
      window.removeEventListener(
        'resize',
        debounce(this.setIntroComponentsHeight, 50),
      )
    }
  }

  setIntroComponentsHeight = () => {
    const {
      introJumbotronHeight: introJumbotronHeightOld,
      changeIntroJumbotronHeight,
    } = this.props
    const introJumbotronDomNode = this.introJumbotron
      ? ReactDOM.findDOMNode(this.introJumbotron)
      : null
    const introJumbotronHeight = introJumbotronDomNode
      ? introJumbotronDomNode.clientHeight
      : null
    if (
      introJumbotronHeight &&
      introJumbotronHeight !== introJumbotronHeightOld
    ) {
      changeIntroJumbotronHeight(introJumbotronHeight)
    }
  }

  setActiveYear = year => {
    const { store } = this.props
    store.events.getEvents([year])
    store.yearsOfEvents.setActiveEventYears([year])
  }

  yearButtons = () => {
    const { yearsOfEvents, activeEventYears } = this.props.store.yearsOfEvents

    return yearsOfEvents.map((year, index) => (
      <Button
        key={index}
        active={activeEventYears.includes(year)}
        onClick={() => this.setActiveYear(year)}
      >
        {year}
      </Button>
    ))
  }

  render() {
    const { store, introJumbotronHeight } = this.props
    const showEventsTable = min(store.yearsOfEvents.activeEventYears) > 2014
    const { activeEvent, showNewEvent } = store.events

    return (
      <DocumentTitle title="Events">
        <Container className="events">
          <IntroJumbotron
            ref={j => {
              this.introJumbotron = j
            }}
          />
          <YearButtonsContainer>
            <ButtonGroup>
              {this.yearButtons()}
              <Button
                onClick={() => {
                  navigate('/monthlyEvents')
                  store.page.getPage('pages_monthlyEvents')
                }}
              >
                2014 - 2011
              </Button>
            </ButtonGroup>
          </YearButtonsContainer>
          {showEventsTable && (
            <EventsTable introJumbotronHeight={introJumbotronHeight} />
          )}
          {activeEvent && <EditEvent />}
          {showNewEvent && <NewEvent />}
          {store.events.eventToRemove && <ModalRemoveEvent />}
        </Container>
      </DocumentTitle>
    )
  }
}
export default enhance(Events)
