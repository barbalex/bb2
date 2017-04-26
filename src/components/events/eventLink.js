// @flow
import React from 'react'
import {
  Row,
  Col,
  Tooltip,
  OverlayTrigger,
  Glyphicon,
  FormGroup,
  FormControl,
} from 'react-bootstrap'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'

const glyphStyle = {
  fontSize: '1.5em',
  color: 'red',
  cursor: 'pointer',
}

const enhance = compose(
  inject(`store`),
  withHandlers({
    onChangeUrl: props => (e: Object): void => {
      // not using action because don't know
      // how to find this link in activeEvent.links...
      props.link.url = e.target.value
    },
    onBlurUrl: props => (): void => {
      const { activeEvent, link: oldLink, link: newLink, store } = props
      const index = activeEvent.links.findIndex(
        link => link.label === oldLink.label && link.url === oldLink.url,
      )
      activeEvent.links[index] = newLink
      store.events.saveEvent(activeEvent)
    },
    onChangeLabel: props => (e: Object): void => {
      props.link.label = e.target.value
    },
    onBlurLabel: props => (): void => {
      const { activeEvent, link: oldLink, link: newLink, store } = props
      const index = activeEvent.links.findIndex(
        link => link.url === oldLink.url && link.label === oldLink.label,
      )
      activeEvent.links[index] = newLink
      store.events.saveEvent(activeEvent)
    },
    onRemoveLink: props => (): void => {
      const { activeEvent, link: linkToRemove, store } = props
      activeEvent.links = activeEvent.links.filter(
        link =>
          link.label !== linkToRemove.label && link.url !== linkToRemove.url,
      )
      store.events.saveEvent(activeEvent)
    },
  }),
  observer,
)

const EventLink = ({
  activeEvent,
  link,
  focus,
  index,
  onChangeUrl,
  onBlurUrl,
  onChangeLabel,
  onBlurLabel,
  onRemoveLink,
}: {
  activeEvent: Object,
  link: Object,
  focus: boolean,
  index: number,
  onChangeUrl: () => void,
  onBlurUrl: () => void,
  onChangeLabel: () => void,
  onBlurLabel: () => void,
  onRemoveLink: () => void,
}) => (
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
        overlay={
          <Tooltip id="removeLink">
            remove
          </Tooltip>
        }
      >
        <Glyphicon
          glyph="remove-circle"
          style={glyphStyle}
          onClick={onRemoveLink}
        />
      </OverlayTrigger>
    </Col>
  </Row>
)

EventLink.displayName = 'EventLink'

export default enhance(EventLink)
