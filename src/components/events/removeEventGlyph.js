// @flow
import React from 'react'
import { Glyphicon, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'

const glyphStyle = {
  fontSize: '0.9em',
  color: 'red',
  paddingLeft: 8,
  cursor: 'pointer',
}

const enhance = compose(
  inject(`store`),
  withHandlers({
    onRemoveEvent: props => () =>
      props.store.events.setEventToRemove(props.event),
  }),
  observer,
)

const RemoveEventGlyph = ({
  store,
  event,
  onRemoveEvent,
}: { store: Object, event: Object, onRemoveEvent: () => void }) => (
  <OverlayTrigger
    placement="top"
    overlay={
      <Tooltip id="removeThisEvent">
        remove
      </Tooltip>
    }
  >
    <Glyphicon
      glyph="remove-circle"
      style={glyphStyle}
      onClick={onRemoveEvent}
    />
  </OverlayTrigger>
)

RemoveEventGlyph.displayName = 'RemoveEventGlyph'

export default enhance(RemoveEventGlyph)
