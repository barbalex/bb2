// @flow
import React from 'react'
import { Glyphicon } from 'react-bootstrap'

import RemoveEventGlyph from './removeEventGlyph.js'
import EditEventGlyph from './editEventGlyph.js'

const linkGlyphStyle = {
  fontSize: `${0.7}em`,
  paddingRight: 3,
  verticalAlign: `${10}%`,
}
const outerSpanStyle = {
  paddingLeft: 5,
}

const Event = ({
  event,
  email,
  onRemoveEvent,
}: {
  event: Object,
  email: string,
  onRemoveEvent: () => void,
}) => {
  const showEditingGlyphons = !!email
  const classNames = event.tags && event.tags.length > 0
    ? event.tags.map(tag => `event-${tag}`).join(' ')
    : []

  const links = event.links.map((link, key) => (
    <span key={key} style={outerSpanStyle}>
      {key > 0 && ' '}
      <a href={link.url} target="_blank">
        <Glyphicon glyph="new-window" style={linkGlyphStyle} />
        {link.label}
      </a>
    </span>
  ))

  return (
    <li className={classNames}>
      <p className={classNames}>
        {event.title} <span>{links}</span>
        {showEditingGlyphons && <EditEventGlyph event={event} />}
        {showEditingGlyphons && <RemoveEventGlyph event={event} />}
      </p>
    </li>
  )
}

Event.displayName = 'Event'

export default Event
