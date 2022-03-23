/**
 * cannot use hooks
 * adding useContext errors:
 * Hooks can only be called inside the body of a function component
 */
import React from 'react'
import dayjs from 'dayjs'
import ReactList from 'react-list'
import styled from 'styled-components'
import { gql, useQuery } from '@apollo/client'

import DateRow from './DateRow'
import MonthRow from './MonthRow'
import MonthlyStatisticsRow from './MonthlyStatisticsRow'

const BodyRow = styled.div`
  display: flex;
  border-top: 1px solid #ececec !important;
  border-radius: 4px;
  &:hover {
    background-color: #f5f5f5;
  }
`
const BodyCell = styled.div`
  padding: 5px;
  flex: 1;
  padding-left: 10px;
`

const DateRows = ({ activeYear }) => {
  const { loading, error, data } = useQuery(
    gql`
      query EventsForEventsPageQuery($from: date, $to: date) {
        event(
          where: { _and: { datum: { _gte: $from } }, datum: { _lte: $to } }
          order_by: [{ datum: desc, tags_sort: asc }]
        ) {
          id
          datum
          event_type
          links
          tags
          title
        }
        event_dates: event_aggregate(
          distinct_on: datum
          where: { _and: { datum: { _gte: $from } }, datum: { _lte: $to } }
          order_by: { datum: desc }
        ) {
          nodes {
            datum
          }
        }
      }
    `,
    { variables: { from: `${activeYear}--01-01`, to: `${activeYear}-12-31` } },
  )

  const events = data?.event ?? []
  const dates = data?.event_dates.nodes ?? []

  const dateRowObjects = dates.map(({ datum: date }) => ({
    date,
    migrationEvents: events.filter(
      (event) => event.datum === date && event.event_type === 'migration',
    ),
    politicsEvents: events.filter(
      (event) => event.datum === date && event.event_type === 'politics',
    ),
  }))

  const dateRows = []
  dateRowObjects.forEach((dRO, index) => {
    const day = dayjs(dRO.date).format('D')
    const endOfMonth = dayjs(dRO.date).endOf('month').format('DD')
    const dROForDateRow = {
      date: dRO.date,
      migrationEvents: dRO.migrationEvents.filter(
        (event) => !event.tags || !event.tags.includes('monthlyStatistics'),
      ),
      politicsEvents: dRO.politicsEvents.filter(
        (event) => !event.tags || !event.tags.includes('monthlyStatistics'),
      ),
    }
    const dROForMonthlyStatsRow = {
      date: dRO.date,
      migrationEvents: dRO.migrationEvents.filter(
        (event) => event.tags && event.tags.includes('monthlyStatistics'),
      ),
      politicsEvents: dRO.politicsEvents.filter(
        (event) => event.tags && event.tags.includes('monthlyStatistics'),
      ),
    }
    const dROForMonthlyStatsHasEvents =
      dROForMonthlyStatsRow.migrationEvents.length > 0 ||
      dROForMonthlyStatsRow.politicsEvents.length > 0
    const needsMonthRow = day === endOfMonth || index === 0
    const needsMonthlyStatisticsRow =
      day === endOfMonth && dROForMonthlyStatsHasEvents
    if (needsMonthRow) {
      dateRows.push(<MonthRow key={`${index}monthRow`} dateRowObject={dRO} />)
    }
    if (needsMonthlyStatisticsRow) {
      dateRows.push(
        <MonthlyStatisticsRow
          key={`${index}monthlyStatisticsRow`}
          dateRowObject={dROForMonthlyStatsRow}
        />,
      )
    }
    dateRows.push(<DateRow key={index} dateRowObject={dROForDateRow} />)
  })
  const renderDateRow = (index) => dateRows[index]
  // console.log('DateRows, dateRows:', dateRows)

  if (loading) {
    return (
      <BodyRow>
        <BodyCell>
          <p>Loading events...</p>
        </BodyCell>
      </BodyRow>
    )
  }

  if (error) {
    return (
      <BodyRow>
        <BodyCell>
          <p>{`Error loading data: ${error.message}`}</p>
        </BodyCell>
      </BodyRow>
    )
  }

  return (
    <ReactList
      itemRenderer={renderDateRow}
      length={dateRows.length}
      type="variable"
    />
  )
}

export default DateRows
