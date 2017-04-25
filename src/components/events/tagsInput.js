// @flow
import React from 'react'
import { Glyphicon } from 'react-bootstrap'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'

import allTags from './tags'

const enhance = compose(
  inject(`store`),
  withHandlers({
    onChangeTag: props => (tag, event, activeEvent) => {
      const checked = event.target.checked
      if (checked) {
        activeEvent.tags.push(tag)
        props.store.events.saveEvent(activeEvent)
      } else {
        activeEvent.tags = activeEvent.tags.filter(_tag => _tag !== tag)
        props.store.events.saveEvent(activeEvent)
      }
    },
  }),
  observer,
)

const tagIcon = option => {
  const top = option.top ? option.top : 0
  const glyphStyle = {
    top,
    fontSize: '1.5em',
  }
  return <Glyphicon glyph={option.iconText} style={glyphStyle} />
}
const labelStyle = {
  fontWeight: 'bold',
  marginBottom: 2,
}

const EventTags = ({
  activeEvent,
  onChangeTag,
}: { activeEvent: Object, onChangeTag: () => void }) => (
  <div style={{ marginBottom: 20 }}>
    <div style={labelStyle}>
      Tags
    </div>
    <div className="event-tags">
      {allTags.map((option, index) => (
        <div key={index} className="form-group event-tag">
          <label>
            <input
              type="checkbox"
              checked={activeEvent.tags.includes(option.tag)}
              onChange={event => onChangeTag(option.tag, event, activeEvent)}
            />
            {option.iconText && tagIcon(option)}
            &nbsp;{option.tag}
          </label>
        </div>
      ))}
    </div>
  </div>
)

EventTags.displayName = 'EventTags'

export default enhance(EventTags)
