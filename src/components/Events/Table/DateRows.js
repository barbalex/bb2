/**
 * cannot use hooks
 * adding useContext errors:
 * Hooks can only be called inside the body of a function component
 */
import React, { useContext } from 'react'
import moment from 'moment'
import ReactList from 'react-list'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import DateRow from './DateRow'
import MonthRow from './MonthRow'
import MonthlyStatisticsRow from './MonthlyStatisticsRow'
import getDaterowObjectsSinceOldestEvent from '../../../modules/getDaterowObjectsSinceOldestEvent'
import storeContext from '../../../storeContext'

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

const DateRows = () => {
  const store = useContext(storeContext)
  const dateRowObjects = getDaterowObjectsSinceOldestEvent(
    store.events.events,
    store.yearsOfEvents.activeEventYears,
  )
  const dateRows = []
  if (dateRowObjects.length > 0) {
    dateRowObjects.forEach((dRO, index) => {
      const day = moment(dRO.date).format('D')
      const endOfMonth = moment(dRO.date)
        .endOf('month')
        .format('DD')
      const dROForDateRow = {
        date: dRO.date,
        migrationEvents: dRO.migrationEvents.filter(
          event => !event.tags || !event.tags.includes('monthlyStatistics'),
        ),
        politicsEvents: dRO.politicsEvents.filter(
          event => !event.tags || !event.tags.includes('monthlyStatistics'),
        ),
      }
      const dROForMonthlyStatsRow = {
        date: dRO.date,
        migrationEvents: dRO.migrationEvents.filter(
          event => event.tags && event.tags.includes('monthlyStatistics'),
        ),
        politicsEvents: dRO.politicsEvents.filter(
          event => event.tags && event.tags.includes('monthlyStatistics'),
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
    const renderDateRow = (index, key) => dateRows[index]

    return (
      <ReactList
        itemRenderer={renderDateRow}
        length={dateRows.length}
        type="variable"
      />
    )
  }
  return (
    <BodyRow>
      <BodyCell>
        <p>Loading events...</p>
      </BodyCell>
    </BodyRow>
  )
}

export default observer(DateRows)
