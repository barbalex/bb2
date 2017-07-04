// @flow
import React from 'react'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'

import Event from './event'

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

  if (migrationEvents.length > 0 || politicsEvents.length > 0) {
    return (
      <div className="eventsTable-body-row monthlyStatisticsRow">
        <div className="eventsTable-body-cell eventsTable-cell-day">
          <p />
        </div>
        <div className="eventsTable-body-cell eventsTable-cell-migration">
          <ul>
            {migrationEvents}
          </ul>
        </div>
        <div className="eventsTable-body-cell eventsTable-cell-politics">
          <ul>
            {politicsEvents}
          </ul>
        </div>
      </div>
    )
  }
  return null
}

MonthlyStatisticsRow.displayName = 'MonthlyStatisticsRow'

export default enhance(MonthlyStatisticsRow)
