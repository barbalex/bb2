import React, { useContext, useCallback } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import EventLink from './EventLink'
import storeContext from '../../../storeContext'

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`
const Label = styled.p`
  margin-bottom: 0;
`

const EventLinks = ({ activeEvent, saveToDb }) => {
  const store = useContext(storeContext)
  const { saveEvent } = store.events

  const onNewLink = useCallback(() => {
    const newLink = {
      url: '',
      label: '',
    }
    activeEvent.links.push(newLink)
    saveEvent(activeEvent)
  }, [activeEvent, saveEvent])

  return (
    <div>
      <Title>Links</Title>
      <Row>
        <Col sm={3} lg={2}>
          <Label>{activeEvent.links.length > 0 ? 'Label' : null}</Label>
        </Col>
        <Col sm={7} lg={8}>
          <Label>{activeEvent.links.length > 0 ? 'Url' : null}</Label>
        </Col>
        <Col sm={1} lg={1} />
      </Row>
      {activeEvent.links.map((link, index) => (
        <EventLink
          activeEvent={activeEvent}
          //focus={index === activeEvent.links.length - 1}
          key={index}
          index={index}
          saveToDb={saveToDb}
        />
      ))}
      <Button onClick={onNewLink}>new link</Button>
    </div>
  )
}

export default observer(EventLinks)
