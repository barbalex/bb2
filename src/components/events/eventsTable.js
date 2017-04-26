// @flow
import React from 'react'
import GeminiScrollbar from 'react-gemini-scrollbar'

import DateRows from './dateRows.js'

const fontSize = window.innerWidth < 500 ? 20 : 24
const headerStyle = { fontSize }

const Events = ({
  introJumbotronHeight,
  activeEventYears,
  events,
  email,
  onRemoveEvent,
}: {
  introJumbotronHeight: number,
  activeEventYears: Array<number>,
  events: Array<Object>,
  email: string,
  onRemoveEvent: () => void,
}) => {
  const eventsTableHeadTop = introJumbotronHeight
    ? introJumbotronHeight + 88
    : 173
  const eventsTableHeadStyle = {
    top: eventsTableHeadTop,
    position: 'absolute',
  }

  return (
    <div className="eventsTable">
      <div style={eventsTableHeadStyle} className="eventsTable-header">
        <div className="eventsTable-header-row">
          <div
            className="eventsTable-header-cell eventsTable-cell-day"
            style={headerStyle}
          />
          <div
            className="eventsTable-header-cell eventsTable-cell-migration"
            style={headerStyle}
          >
            Maritime Events
          </div>
          <div
            className="eventsTable-header-cell eventsTable-cell-politics"
            style={headerStyle}
          >
            Political Events
          </div>
        </div>
      </div>
      <div className="eventsTable-body">
        <GeminiScrollbar id="eventsTableBody" autoshow>
          <DateRows
            events={events}
            email={email}
            activeEventYears={activeEventYears}
            onRemoveEvent={onRemoveEvent}
          />
        </GeminiScrollbar>
      </div>
    </div>
  )
}

Events.displayName = 'Events'

export default Events
