import React, { useCallback, useMemo, useState } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import styled from 'styled-components'
import DocumentTitle from 'react-document-title'
import { navigate } from '@reach/router'
import { gql, useQuery } from '@apollo/client'

import EditEvent from './EditEvent'
import EventsTable from './Table'
import IntroJumbotron from './IntroJumbotron'
import YearButton from './YearButton'

const Container = styled.div`
  p,
  div {
    font-size: medium;
  }
  div.event-weather {
    position: relative !important;
  }
  li.event-weather {
    list-style-type: none !important;
  }

  div.event-statistics,
  div.event-monthlyStatistics {
    position: relative;
  }
  li.event-statistics,
  li.event-monthlyStatistics {
    list-style-type: none;
  }
  div.event-victims {
    position: relative;
  }
  li.event-victims {
    list-style-type: none;
  }
  div.event-highlighted {
    position: relative;
  }
  li.event-highlighted {
    list-style-type: none;
  }
`
const YearButtonsContainer = styled.div`
  text-align: center;
`

const Events = ({ id }) => {
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

  const onClickMonthlyEvents = useCallback(
    () => navigate('/monthly-events'),
    [],
  )

  const [grouped, setGrouped] = useState(true)
  const onClickSetGrouped = useCallback(() => {
    setGrouped(!grouped)
  }, [grouped, setGrouped])

  const [activeYear, setActiveYear] = useState(new Date().getFullYear())

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
              <YearButton
                key={year}
                year={year}
                activeYear={activeYear}
                setActiveYear={setActiveYear}
              />
            ))}
            {grouped && (
              <Button onClick={onClickSetGrouped}>2018 - 2015</Button>
            )}
            <Button onClick={onClickMonthlyEvents}>2014 - 2011</Button>
          </ButtonGroup>
        </YearButtonsContainer>
        <EventsTable activeYear={activeYear} />
        {id && <EditEvent id={id} />}
      </Container>
    </DocumentTitle>
  )
}
export default Events
