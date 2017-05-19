// @flow
import React from 'react'
import { Glyphicon, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'

const glyphStyle = {
  fontSize: '0.9em',
  paddingLeft: 8,
  cursor: 'pointer',
}

const enhance = compose(
  inject(`store`),
  withHandlers({
    onClick: props => () => {
      props.store.events.getEvent(props.event._id)
    },
  }),
  observer,
)

const EditEventGlyph = ({
  store,
  event,
  onClick,
}: {
  store: Object,
  event: Object,
  onClick: () => void,
}) => (
  <OverlayTrigger
    placement="top"
    overlay={
      <Tooltip id="editThisEvent">
        edit
      </Tooltip>
    }
  >
    <Glyphicon glyph="pencil" style={glyphStyle} onClick={onClick} />
  </OverlayTrigger>
)

EditEventGlyph.displayName = 'EditEventGlyph'

export default enhance(EditEventGlyph)
