// @flow
import React from 'react'
import moment from 'moment'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import styled from 'styled-components'

import Event from './event'

const BodyCell = styled.div`
  padding: 5px;
  flex: 1;
`
const BodyCellDay = BodyCell.extend`
  width: 60px;
  max-width: 60px;
  padding-right: 20px;
  text-align: right;
`
const BodyCellDayWithEvents = BodyCellDay.extend`
  p {
    margin-top: 5px !important;
  }
`
const BodyCellMigration = BodyCell.extend`
  width: 50%;
  max-width: 50%;
  word-wrap: break-word;
  padding-right: 10px;
`
const BodyCellPolitics = BodyCell.extend`
  width: 50%;
  max-width: 50%;
  word-wrap: break-word;
  padding-left: 10px;
`

const enhance = compose(inject(`store`), observer)

const mapEventComponents = events =>
  events.map((event, key) => <Event key={key} event={event} />)

const DateRow = ({
  store,
  dateRowObject: dRO,
}: {
  store: Object,
  dateRowObject: Object,
}) => {
  const day = moment(dRO.date).format('D')
  const migrationEvents = mapEventComponents(dRO.migrationEvents)
  const politicsEvents = mapEventComponents(dRO.politicsEvents)
  const dayWithEvents = migrationEvents.length > 0 || politicsEvents.length > 0

  return (
    <div className="eventsTable-body-row">
      {dayWithEvents &&
        <BodyCellDayWithEvents>
          <p>
            {day}
          </p>
        </BodyCellDayWithEvents>}
      {!dayWithEvents &&
        <BodyCellDay>
          <p>
            {day}
          </p>
        </BodyCellDay>}
      <BodyCellMigration>
        <ul>
          {migrationEvents}
        </ul>
      </BodyCellMigration>
      <BodyCellPolitics>
        <ul>
          {politicsEvents}
        </ul>
      </BodyCellPolitics>
    </div>
  )
}

DateRow.displayName = 'DateRow'

export default enhance(DateRow)
