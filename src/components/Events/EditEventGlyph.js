import React from 'react'
import { Glyphicon, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import styled from 'styled-components'

const StyledGlyphicon = styled(Glyphicon)`
  font-size: 0.9em;
  padding-left: 8px;
  cursor: pointer;
`

const enhance = compose(
  inject('store'),
  withHandlers({
    onClick: props => () => {
      props.store.events.getEvent(props.event._id)
    },
  }),
  observer,
)

const EditEventGlyph = ({ store, event, onClick }) => (
  <OverlayTrigger
    placement="top"
    overlay={<Tooltip id="editThisEvent">edit</Tooltip>}
  >
    <StyledGlyphicon glyph="pencil" onClick={onClick} />
  </OverlayTrigger>
)

export default enhance(EditEventGlyph)
