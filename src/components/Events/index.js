import React, { useState, useContext, useEffect, useCallback } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import moment from 'moment'
import min from 'lodash/min'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import DocumentTitle from 'react-document-title'
import { navigate } from '@reach/router'
import ReactResizeDetector from 'react-resize-detector'

import IntroJumbotron from './IntroJumbotron'
import NewEvent from './NewEvent'
import EditEvent from './EditEvent'
import ModalRemoveEvent from './ModalRemoveEvent'
import EventsTable from './EventsTable'
import storeContext from '../../storeContext'

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

const Events = () => {
  const store = useContext(storeContext)
  const { getPage } = store.page
  const {
    yearsOfEvents,
    activeEventYears,
    getYearsOfEvents,
    setActiveEventYears,
  } = store.yearsOfEvents
  const showEventsTable = min(activeEventYears) > 2014
  const { activeEvent, eventToRemove, getEvents, showNewEvent } = store.events

  const [introJumbotronHeight, setIntroJumbotronHeight] = useState(1462)
  const onResize = useCallback(
    (width, height) => setIntroJumbotronHeight(height),
    [],
  )

  useEffect(() => {
    getPage('pages_events')
    getEvents([parseInt(moment().format('YYYY'), 0)])
    getYearsOfEvents()
  }, [getEvents, getPage, getYearsOfEvents])

  return (
    <DocumentTitle title="Events">
      <Container className="events">
        <ReactResizeDetector handleHeight onResize={onResize} />
        <IntroJumbotron />
        <YearButtonsContainer>
          <ButtonGroup>
            {yearsOfEvents.map((year, index) => (
              <Button
                key={index}
                active={activeEventYears.includes(year)}
                onClick={() => {
                  getEvents([year])
                  setActiveEventYears([year])
                }}
              >
                {year}
              </Button>
            ))}
            <Button
              onClick={() => {
                navigate('/monthly-events')
                getPage('pages_monthlyEvents')
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
        {eventToRemove && <ModalRemoveEvent />}
      </Container>
    </DocumentTitle>
  )
}
export default observer(Events)
