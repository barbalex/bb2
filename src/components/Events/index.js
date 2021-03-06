import React, { useContext, useEffect, useCallback, useMemo } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import min from 'lodash/min'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import DocumentTitle from 'react-document-title'
import { navigate } from '@reach/router'

import NewEvent from './NewEvent'
import EditEvent from './EditEvent'
import ModalRemoveEvent from './ModalRemoveEvent'
import EventsTable from './Table'
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
    grouped,
    setGrouped,
  } = store.yearsOfEvents
  const showEventsTable = min(activeEventYears) > 2014
  const {
    activeEvent,
    eventToRemove,
    getInitialEvents,
    showNewEvent,
  } = store.events

  useEffect(() => {
    getPage('pages_events')
    // PROBLEM
    // gatsby does not build properly with pouchdb importing
    // so pouchdb is imported async
    // so this db call happens BEFORE pouchdb is finished importing
    // in dev
    // so need to set timeout...
    typeof window !== 'undefined'
      ? setTimeout(() => getInitialEvents(), 1000)
      : getInitialEvents()
  }, [getPage, getInitialEvents])

  const onClickMonthlyEvents = useCallback(() => {
    navigate('/monthly-events')
    getPage('pages_monthlyEvents')
  }, [getPage])

  const onClickSetGrouped = useCallback(() => {
    setGrouped(!grouped)
  }, [grouped, setGrouped])

  const yearsOfEventsToUse = useMemo(
    () => (grouped ? yearsOfEvents.filter((y) => y > 2018) : yearsOfEvents),
    [grouped, yearsOfEvents],
  )

  return (
    <DocumentTitle title="Events">
      <Container className="events">
        <IntroJumbotron />
        <YearButtonsContainer>
          <ButtonGroup>
            {yearsOfEventsToUse.map((year) => (
              <YearButton key={year} year={year} />
            ))}
            {grouped && (
              <Button onClick={onClickSetGrouped}>2015 - 2018</Button>
            )}
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
