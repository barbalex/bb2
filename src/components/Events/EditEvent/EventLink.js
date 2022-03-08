import React, { useCallback, useEffect, useState, useMemo } from 'react'
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

import tpPgObjectArray from '../../../modules/toPgObjectArray'

const StyledGlyphicon = styled(Glyphicon)`
  font-size: 1.5em;
  color: red;
  cursor: pointer;
`

const EventLink = ({ activeEvent, focus, index, saveToDb }) => {
  const links = useMemo(() => [...activeEvent.links], [activeEvent.links])
  const link = links[index]
  console.log('EventLink', { activeEvent, links, link, index })

  const [label, setLabel] = useState()
  const [url, setUrl] = useState()

  useEffect(() => {
    setLabel(link.label)
    setUrl(link.url)
  }, [link.label, link.url])

  const onChangeUrl = useCallback((e) => setUrl(e.target.value), [])
  const onBlurUrl = useCallback(() => {
    console.log('bluring url')
    links[index] = { url, label }
    saveToDb({ field: 'links', value: tpPgObjectArray(links) })
  }, [index, label, links, saveToDb, url])

  const onChangeLabel = useCallback((e) => setLabel(e.target.value), [])
  const onBlurLabel = useCallback(() => {
    links[index] = { url, label }
    saveToDb({ field: 'links', value: tpPgObjectArray(links) })
  }, [index, label, links, saveToDb, url])

  const onRemoveLink = useCallback(() => {
    links.splice(index, 1)
    saveToDb({ field: 'links', value: links })
  }, [index, links, saveToDb])

  return (
    <Row key={index}>
      <Col sm={3} lg={2}>
        <FormGroup controlId="eventLink">
          <FormControl
            type="text"
            bsSize="small"
            value={label}
            onChange={onChangeLabel}
            onBlur={onBlurLabel}
            autoFocus={focus && !label}
          />
        </FormGroup>
      </Col>
      <Col sm={8} lg={9}>
        <FormGroup controlId="eventUrl">
          <FormControl
            type="url"
            bsSize="small"
            value={url}
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
