// @flow
import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'

import EventLink from './eventLink.js'

const titleStyle = {
  fontWeight: 'bold',
  marginBottom: 5,
}
const labelStyle = {
  marginBottom: 0,
}

const enhance = compose(
  inject(`store`),
  withState('showMeta', 'changeShowMeta', false),
  withHandlers({
    onNewLink: props => (): void => {
      const newLink = {
        url: '',
        label: '',
      }
      props.activeEvent.links.push(newLink)
      props.store.events.saveEvent(props.activeEvent)
    },
    onCloseMeta: props => () => props.changeShowMeta(false),
  }),
  observer,
)

const EventLinks = ({
  store,
  onNewLink,
}: { store: Object, onNewLink: () => void }) => {
  const { activeEvent } = store.events

  return (
    <div>
      <div style={titleStyle}>
        Links
      </div>
      <Row>
        <Col sm={3} lg={2}>
          <p style={labelStyle}>
            {activeEvent.links.length > 0 ? 'Label' : null}
          </p>
        </Col>
        <Col sm={7} lg={8}>
          <p style={labelStyle}>
            {activeEvent.links.length > 0 ? 'Url' : null}
          </p>
        </Col>
        <Col sm={1} lg={1} />
      </Row>
      {activeEvent.links.map((link, index) => (
        <EventLink
          link={link}
          focus={index === activeEvent.links.length - 1}
          key={index}
          index={index}
        />
      ))}
      <Button onClick={onNewLink}>
        new link
      </Button>
    </div>
  )
}

EventLinks.displayName = 'EventLinks'

export default enhance(EventLinks)
