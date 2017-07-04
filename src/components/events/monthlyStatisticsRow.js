// @flow
import React from 'react'
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

const mapEventComponents = (events: Array<Object>) =>
  events.map((event, key) => <Event key={key} event={event} />)

const MonthlyStatisticsRow = ({
  store,
  dateRowObject: dRO,
}: {
  store: Object,
  dateRowObject: Object,
}) => {
  const migrationEvents = mapEventComponents(dRO.migrationEvents)
  const politicsEvents = mapEventComponents(dRO.politicsEvents)
  const dayWithEvents = migrationEvents.length > 0 || politicsEvents.length > 0

  if (dayWithEvents) {
    return (
      <div className="eventsTable-body-row monthlyStatisticsRow">
        <BodyCellDay>
          <p />
        </BodyCellDay>
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
  return null
}

MonthlyStatisticsRow.displayName = 'MonthlyStatisticsRow'

export default enhance(MonthlyStatisticsRow)
