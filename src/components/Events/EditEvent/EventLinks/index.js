import React, { useCallback } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { gql, useApolloClient } from '@apollo/client'

import EventLink from './EventLink'

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`
const Label = styled.p`
  margin-bottom: 0;
`

const EventLinks = ({ activeEvent }) => {
  const client = useApolloClient()

  const onNewLink = useCallback(() => {
    const newLink = {
      url: '',
      label: '',
    }
    client.mutate({
      mutation: gql`
        mutation mutateEvent($id: uuid!, $val: jsonb) {
          update_event_by_pk(pk_columns: { id: $id }, _set: { links: $val }) {
            id
            links
          }
        }
      `,
      variables: {
        id: activeEvent.id,
        val: [...(activeEvent.links ?? []), newLink],
      },
    })
  }, [activeEvent.id, activeEvent.links, client])

  return (
    <div>
      <Title>Links</Title>
      <Row>
        <Col sm={3} lg={2}>
          <Label>
            {(activeEvent?.links ?? []).length > 0 ? 'Label' : null}
          </Label>
        </Col>
        <Col sm={7} lg={8}>
          <Label>{(activeEvent?.links ?? []).length > 0 ? 'Url' : null}</Label>
        </Col>
        <Col sm={1} lg={1} />
      </Row>
      {(activeEvent?.links ?? []).map((link, index) => (
        <EventLink activeEvent={activeEvent} key={index} index={index} />
      ))}
      <Button onClick={onNewLink}>new link</Button>
    </div>
  )
}

export default EventLinks
