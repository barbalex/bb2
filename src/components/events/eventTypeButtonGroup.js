// @flow
import React, { Component } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'

const labelStyle = {
  fontWeight: 'bold',
  marginBottom: 5,
}
const containerStyle = { marginBottom: 20 }

const enhance = compose(
  inject(`store`),
  withHandlers({
    changeEventType: props => eventType => {
      const { activeEvent, saveEvent } = props.store.events
      activeEvent.eventType = eventType
      saveEvent(activeEvent)
    },
  }),
  observer,
)

class EventTypeButtonGroup extends Component {
  displayName: 'EventType'

  props: {
    store: Object,
    changeEventType: () => void,
  }

  componentDidMount() {
    const { store, changeEventType } = this.props
    // if no eventType, set migration
    if (!store.events.activeEvent.eventType) changeEventType('migration')
  }

  render() {
    const { changeEventType, store } = this.props
    const { eventType } = store.events.activeEvent

    return (
      <div style={containerStyle}>
        <div style={labelStyle}>
          Column
        </div>
        <ButtonGroup>
          <Button
            className={eventType === 'migration' ? 'active' : ''}
            onClick={changeEventType.bind(this, 'migration')}
          >
            maritime events / monthly statistics
          </Button>
          <Button
            className={eventType === 'politics' ? 'active' : ''}
            onClick={changeEventType.bind(this, 'politics')}
          >
            political events / total statistics
          </Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default enhance(EventTypeButtonGroup)
