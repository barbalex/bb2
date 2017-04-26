import React from 'react'
import moment from 'moment'
import Event from './event.js'

const mapEventComponents = (events, email) =>
  events.map((ev, key) => <Event key={key} event={ev} email={email} />)

const DateRow = ({ dateRowObject: dRO, email }) => {
  const day = moment(dRO.date).format('D')
  const migrationEvents = mapEventComponents(dRO.migrationEvents, email)
  const politicsEvents = mapEventComponents(dRO.politicsEvents, email)
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

DateRow.propTypes = {
  dateRowObject: React.PropTypes.object,
  email: React.PropTypes.string,
}

export default DateRow
