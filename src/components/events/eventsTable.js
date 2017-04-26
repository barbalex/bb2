// @flow
import React from 'react'
import GeminiScrollbar from 'react-gemini-scrollbar'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'

import DateRows from './dateRows.js'

const fontSize = window.innerWidth < 500 ? 20 : 24
const headerStyle = { fontSize }

const enhance = compose(inject(`store`), observer)

const Events = ({
  store,
  introJumbotronHeight,
}: {
  store: Object,
  introJumbotronHeight: number,
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
          <DateRows />
        </GeminiScrollbar>
      </div>
    </div>
  )
}

Events.displayName = 'Events'

export default enhance(Events)
