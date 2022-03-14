import React, { useContext, useCallback, useMemo } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import DocumentTitle from 'react-document-title'
import { navigate } from '@reach/router'
import { gql, useQuery } from '@apollo/client'

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
  const { activeYear, grouped, setGrouped } = store.yearsOfEvents
  const showEventsTable = activeYear > 2014
  const { activeEventId, eventToRemove, showNewEvent } = store.events

  const { data } = useQuery(
    gql`
      query yearsForEventsPage {
        years: v_event_years {
          id
          year
        }
      }
    `,
  )

  const years = (data?.years ?? [new Date().getFullYear()]).map((d) => d.year)

  const onClickMonthlyEvents = useCallback(() => {
    getPage('pages_monthlyEvents')
    navigate('/monthly-events')
  }, [getPage])

  const onClickSetGrouped = useCallback(() => {
    setGrouped(!grouped)
  }, [grouped, setGrouped])

  const yearsOfEventsToUse = useMemo(
    () => (grouped ? years.filter((y) => y > 2018) : years),
    [grouped, years],
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
              <Button onClick={onClickSetGrouped}>2018 - 2015</Button>
            )}
            <Button onClick={onClickMonthlyEvents}>2014 - 2011</Button>
          </ButtonGroup>
        </YearButtonsContainer>
        {showEventsTable && <EventsTable />}
        {activeEventId && <EditEvent />}
        {showNewEvent && <NewEvent />}
        {eventToRemove && <ModalRemoveEvent />}
      </Container>
    </DocumentTitle>
  )
}
export default observer(Events)
