// @flow
import React from 'react'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'

import Event from './event.js'

const enhance = compose(inject(`store`), observer)

const mapEventComponents = (events: Array<Object>, email: string) =>
  events.map((ev, key) => <Event key={key} event={ev} email={email} />)

const MonthlyStatisticsRow = ({
  store,
  dateRowObject: dRO,
}: {
  store: Object,
  dateRowObject: Object,
}) => {
  const { email } = store.login
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

export default enhance(MonthlyStatisticsRow)
