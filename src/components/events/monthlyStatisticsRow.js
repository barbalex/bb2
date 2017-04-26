// @flow
import React from 'react'
import Event from './event.js'

const mapEventComponents = (events: Array<Object>, email: string) =>
  events.map((ev, key) => <Event key={key} event={ev} email={email} />)

const MonthlyStatisticsRow = ({
  dateRowObject: dRO,
  email,
}: {
  dateRowObject: Object,
  email: string,
}) => {
  const migrationEvents = mapEventComponents(dRO.migrationEvents, email)
  const politicsEvents = mapEventComponents(dRO.politicsEvents, email)

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

export default MonthlyStatisticsRow
