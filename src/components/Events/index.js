import React, { useContext, useEffect, useCallback } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import moment from 'moment'
import min from 'lodash/min'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import DocumentTitle from 'react-document-title'
import { navigate } from '@reach/router'

import NewEvent from './NewEvent'
import EditEvent from './EditEvent'
import ModalRemoveEvent from './ModalRemoveEvent'
import EventsTable from './EventsTable'
import storeContext from '../../storeContext'
import IntroJumbotron from './IntroJumbotron'
import YearButton from './YearButton'

const Container = styled.div`
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
  } = store.yearsOfEvents
  const showEventsTable = min(activeEventYears) > 2014
  const { activeEvent, eventToRemove, getEvents, showNewEvent } = store.events

  useEffect(() => {
    getPage('pages_events')
    getEvents([parseInt(moment().format('YYYY'), 0)])
    getYearsOfEvents()
  }, [getEvents, getPage, getYearsOfEvents])

  const onClickMonthlyEvents = useCallback(() => {
    navigate('/monthly-events')
    getPage('pages_monthlyEvents')
  }, [getPage])

  return (
    <DocumentTitle title="Events">
      <Container className="events">
        <IntroJumbotron />
        <YearButtonsContainer>
          <ButtonGroup>
            {yearsOfEvents.map(year => (
              <YearButton key={year} year={year} />
            ))}
            <Button onClick={onClickMonthlyEvents}>2014 - 2011</Button>
          </ButtonGroup>
        </YearButtonsContainer>
        {showEventsTable && <EventsTable />}
        {activeEvent && <EditEvent />}
        {showNewEvent && <NewEvent />}
        {eventToRemove && <ModalRemoveEvent />}
      </Container>
    </DocumentTitle>
  )
}
export default observer(Events)
