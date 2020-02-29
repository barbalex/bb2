import React, { useContext, useCallback } from 'react'
import {
  Row,
  Col,
  Tooltip,
  OverlayTrigger,
  Glyphicon,
  FormGroup,
  FormControl,
} from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import storeContext from '../../storeContext'

const StyledGlyphicon = styled(Glyphicon)`
  font-size: 1.5em;
  color: red;
  cursor: pointer;
`

const EventLink = ({ link, focus, index }) => {
  const store = useContext(storeContext)
  const { activeEvent, saveEvent } = store.events

  const onChangeUrl = useCallback(
    e => {
      // not using action because don't know
      // how to find this link in activeEvent.links...
      link.url = e.target.value
    },
    [link.url],
  )
  const onBlurUrl = useCallback(() => {
    const index = activeEvent.links.findIndex(
      l => l.label === link.label && l.url === link.url,
    )
    activeEvent.links[index] = link
    saveEvent(activeEvent)
  }, [activeEvent, link, saveEvent])
  const onChangeLabel = useCallback(
    e => {
      link.label = e.target.value
    },
    [link.label],
  )
  const onBlurLabel = useCallback(() => {
    const index = activeEvent.links.findIndex(
      l => l.url === link.url && l.label === link.label,
    )
    activeEvent.links[index] = link
    saveEvent(activeEvent)
  }, [activeEvent, link, saveEvent])
  const onRemoveLink = useCallback(() => {
    activeEvent.links = activeEvent.links.filter(
      l => l.label !== link.label && l.url !== link.url,
    )
    saveEvent(activeEvent)
  }, [activeEvent, link.label, link.url, saveEvent])

  return (
    <Row key={index}>
      <Col sm={3} lg={2}>
        <FormGroup controlId="eventLink">
          <FormControl
            type="text"
            bsSize="small"
            value={link.label}
            onChange={onChangeLabel}
            onBlur={onBlurLabel}
            autoFocus={focus && !link.label}
          />
        </FormGroup>
      </Col>
      <Col sm={8} lg={9}>
        <FormGroup controlId="eventUrl">
          <FormControl
            type="url"
            bsSize="small"
            value={link.url}
            onChange={onChangeUrl}
            onBlur={onBlurUrl}
          />
        </FormGroup>
      </Col>
      <Col sm={1} lg={1}>
        <OverlayTrigger
          placement="right"
          overlay={<Tooltip id="removeLink">remove</Tooltip>}
        >
          <StyledGlyphicon glyph="remove-circle" onClick={onRemoveLink} />
        </OverlayTrigger>
      </Col>
    </Row>
  )
}

export default observer(EventLink)
