import React, { useCallback, useMemo, useState } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import styled from '@emotion/styled'
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
    () => navigate('/monthly-events/'),
    [],
  )

  const [grouped15to18, setGrouped15to18] = useState(true)
  const onClickSetGrouped15to18 = useCallback(() => {
    setGrouped15to18(!grouped15to18)
  }, [grouped15to18, setGrouped15to18])

  const [grouped19to22, setGrouped19to22] = useState(true)

  const onClickSetGrouped19to22 = useCallback(() => {
    setGrouped19to22(!grouped19to22)
  }, [grouped19to22, setGrouped19to22])

  const [activeYear, setActiveYear] = useState(new Date().getFullYear())

  const yearsOfEventsToUse = useMemo(() => {
    let yrs = years
    if (grouped19to22) {
      yrs = yrs.filter((y) => y < 2019 || y > 2022)
    }
    if (grouped15to18) {
      yrs = yrs.filter((y) => y < 2015 || y > 2018)
    }

    return yrs
  }, [grouped15to18, grouped19to22, years])


  return (
    <DocumentTitle title="Events">
      <Container className="events">
        <IntroJumbotron />
        <YearButtonsContainer>
          <ButtonGroup>
            <Button onClick={onClickMonthlyEvents}>2011 - 2014</Button>
            {grouped15to18 && (
              <Button onClick={onClickSetGrouped15to18}>2015 - 2018</Button>
            )}
            {grouped19to22 && (
              <Button onClick={onClickSetGrouped19to22}>2019 - 2022</Button>
            )}
            {yearsOfEventsToUse.map((year) => (
              <YearButton
                key={year}
                year={year}
                activeYear={activeYear}
                setActiveYear={setActiveYear}
              />
            ))}
          </ButtonGroup>
        </YearButtonsContainer>
        <EventsTable activeYear={activeYear} />
        {id && <EditEvent id={id} />}
      </Container>
    </DocumentTitle>
  )
}
export default Events
