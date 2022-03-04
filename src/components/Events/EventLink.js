import React, { useContext, useCallback, useState } from 'react'
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
import { gql, useQuery, useApolloClient } from '@apollo/client'

import storeContext from '../../storeContext'

const StyledGlyphicon = styled(Glyphicon)`
  font-size: 1.5em;
  color: red;
  cursor: pointer;
`

const EventLink = ({ activeEvent, focus, index, saveToDb }) => {
  const client = useApolloClient()
  const store = useContext(storeContext)
  const { saveEvent } = store.events
  const links = useCallback(() => [...activeEvent.links], [activeEvent.links])
  const link = links[index]
  console.log('EventLink', { link })
  const [label, setLabel] = useState()
  const [url, setUrl] = useState()

  const onChangeUrl = useCallback((e) => setUrl(e.target.value), [])
  const onBlurUrl = useCallback(() => {
    links[index] = { url, label }
    saveToDb({ field: 'links', value: JSON.stringify(links) })
  }, [index, label, links, saveToDb, url])

  const onChangeLabel = useCallback((e) => setLabel(e.target.value), [])
  const onBlurLabel = useCallback(() => {
    links[index] = { url, label }
    saveToDb({ field: 'links', value: JSON.stringify(links) })
  }, [index, label, links, saveToDb, url])

  const onRemoveLink = useCallback(() => {
    activeEvent.links = activeEvent.links.filter(
      (l) => l.label !== link.label && l.url !== link.url,
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
