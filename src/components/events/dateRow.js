// @flow
import React from 'react'
import moment from 'moment'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'

import Event from './event.js'

const enhance = compose(inject(`store`), observer)

const mapEventComponents = events =>
  events.map((event, key) => <Event key={key} event={event} />)

const DateRow = ({
  store,
  dateRowObject: dRO,
}: { store: Object, dateRowObject: Object }) => {
  const day = moment(dRO.date).format('D')
  const migrationEvents = mapEventComponents(dRO.migrationEvents)
  const politicsEvents = mapEventComponents(dRO.politicsEvents)
  const dayClassName = migrationEvents.length > 0 || politicsEvents.length > 0
    ? 'eventsTable-cell-day dayWithEvents'
    : 'eventsTable-cell-day'

  return (
    <div className="eventsTable-body-row">
      <div className={['eventsTable-body-cell', dayClassName].join(' ')}>
        <p>
          {day}
        </p>
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

DateRow.displayName = 'DateRow'

export default enhance(DateRow)
