// @flow
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ButtonGroup, Button } from 'react-bootstrap'
import moment from 'moment'
import debounce from 'lodash/debounce'
import min from 'lodash/min'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'

import IntroJumbotron from './introJumbotron.js'
import NewEvent from './newEvent.js'
import EditEvent from './editEvent.js'
import ModalRemoveEvent from './modalRemoveEvent.js'
import EventsTable from './eventsTable.js'

const enhance = compose(
  inject(`store`),
  withState('docToRemove', 'changeDocToRemove', null),
  withState('introJumbotronHeight', 'changeIntroJumbotronHeight', null),
  observer,
)

class Events extends Component {
  displayName: 'Events'

  props: {
    store: Object,
    docToRemove: Object,
    introJumbotronHeight: number,
    changeDocToRemove: () => void,
    changeIntroJumbotronHeight: () => void,
  }

  componentDidMount() {
    const { store } = this.props
    store.events.getEvents([parseInt(moment().format('YYYY'), 0)])
    store.yearsOfEvents.getYearsOfEvents()
    this.setIntroComponentsHeight()
    window.addEventListener(
      'resize',
      debounce(this.setIntroComponentsHeight, 50),
    )
  }

  componentWillUnmount() {
    window.removeEventListener(
      'resize',
      debounce(this.setIntroComponentsHeight, 50),
    )
  }

  setIntroComponentsHeight() {
    const {
      introJumbotronHeight: introJumbotronHeightOld,
      changeIntroJumbotronHeight,
    } = this.props
    const introJumbotronDomNode = this.introJumbotron
      ? // $FlowIssue
        ReactDOM.findDOMNode(this.introJumbotron)
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

  setActiveYear(year) {
    const { store } = this.props
    store.events.getEvents([year])
    store.yearsOfEvents.setActiveEventYears([year])
  }

  yearButtons() {
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
      <div className="events">
        <IntroJumbotron
          ref={j => {
            // $FlowIssue
            this.introJumbotron = j
          }}
        />
        <div style={{ textAlign: 'center' }}>
          <ButtonGroup>
            {this.yearButtons()}
            <Button onClick={() => store.page.getPage('pages_monthlyEvents')}>
              2014 - 2011
            </Button>
          </ButtonGroup>
        </div>
        {showEventsTable &&
          <EventsTable introJumbotronHeight={introJumbotronHeight} />}
        {activeEvent && <EditEvent />}
        {showNewEvent && <NewEvent />}
        {store.events.eventToRemove && <ModalRemoveEvent />}
      </div>
    )
  }
}
export default enhance(Events)
