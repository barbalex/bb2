import app from 'ampersand-app'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ButtonGroup, Button } from 'react-bootstrap'
import moment from 'moment'
import { debounce, min } from 'lodash'
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
    yearsOfEvents: Array<number>,
    activeEvent: Object,
    editing: boolean,
    email: string,
    showNewEvent: boolean,
    docToRemove: Object,
    introJumbotronHeight: number,
    setActiveEventYears: () => void,
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

  setActiveYear(year) {
    const { store } = this.props
    store.events.getEvents([year])
    store.yearsOfEvents.etActiveEventYears([year])
  }

  yearButtons() {
    const { yearsOfEvents, activeEventYears } = this.props.store.yearsOfEvents

    return yearsOfEvents.map((year, index) => (
      <Button
        key={index}
        active={activeEventYears.includes(year)}
        onClick={() => this.setActiveEventYears(year)}
      >
        {year}
      </Button>
    ))
  }

  removeEvent(remove) {
    const { docToRemove, changeDocToRemove, store } = this.props
    if (remove) {
      store.events.removeEvent(docToRemove)
    }
    changeDocToRemove(null)
  }

  render() {
    const {
      store,
      yearsOfEvents,
      email,
      showNewEvent,
      activeEvent,
      setActiveEventYears,
      docToRemove,
      introJumbotronHeight,
    } = this.props
    const showEventsTable = min(store.yearsOfEvents.activeEventYears) > 2014

    return (
      <div className="events">
        <IntroJumbotron
          ref={j => {
            this.introJumbotron = j
          }}
        />
        <div style={{ textAlign: 'center' }}>
          <ButtonGroup>
            {this.yearButtons()}
            <Button
              onClick={() => app.store.page.getPage('pages_monthlyEvents')}
            >
              2014 - 2011
            </Button>
          </ButtonGroup>
        </div>
        {showEventsTable &&
          <EventsTable
            yearsOfEvents={yearsOfEvents}
            email={email}
            setActiveEventYears={setActiveEventYears}
            introJumbotronHeight={introJumbotronHeight}
          />}
        {activeEvent && <EditEvent activeEvent={activeEvent} />}
        {showNewEvent && <NewEvent />}
        {docToRemove &&
          <ModalRemoveEvent doc={docToRemove} removeEvent={this.removeEvent} />}
      </div>
    )
  }
}
export default enhance(Events)
