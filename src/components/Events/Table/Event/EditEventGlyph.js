import React, { useCallback } from 'react'
import { Glyphicon, Tooltip, OverlayTrigger } from 'react-bootstrap'
import styled from 'styled-components'
import { navigate } from 'gatsby'

const StyledGlyphicon = styled(Glyphicon)`
  font-size: 0.9em;
  padding-left: 8px;
  cursor: pointer;
`

const EditEventGlyph = ({ event }) => {
  const onClick = useCallback(() => navigate(`/events/${event.id}`), [event.id])

  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id="editThisEvent">edit</Tooltip>}
    >
      <StyledGlyphicon glyph="pencil" onClick={onClick} />
    </OverlayTrigger>
  )
}

export default EditEventGlyph
