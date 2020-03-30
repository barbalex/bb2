import React, { useCallback, useContext } from 'react'
import { Glyphicon, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import storeContext from '../../../storeContext'

const StyledGlyphicon = styled(Glyphicon)`
  font-size: 0.9em;
  padding-left: 8px;
  cursor: pointer;
`

const EditEventGlyph = ({ event }) => {
  const store = useContext(storeContext)
  const { getEvent } = store.events

  const onClick = useCallback(() => getEvent(event._id), [event._id, getEvent])

  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id="editThisEvent">edit</Tooltip>}
    >
      <StyledGlyphicon glyph="pencil" onClick={onClick} />
    </OverlayTrigger>
  )
}

export default observer(EditEventGlyph)
