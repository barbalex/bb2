// @flow
import React from 'react'
import {
  Modal,
  Button,
  Alert,
  FormGroup,
  ControlLabel,
  FormControl,
} from 'react-bootstrap'
import moment from 'moment'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'

import EventTypeButtonGroup from './eventTypeButtonGroup.js'
import DateInput from './dateInput.js'
import TagsInput from './tagsInput.js'
import EventLinks from './eventLinks.js'
import getDateFromEventId from '../../modules/getDateFromEventId.js'

const alertStyle = {
  marginTop: 10,
  marginBottom: 10,
}
const inputStyle = {
  marginBottom: 20,
}

const enhance = compose(
  inject(`store`),
  withState('error', 'changeError', null),
  withHandlers({
    onChangeTitle: props => (e: Object): void => {
      const { store, changeError } = props
      const title = e.target.value
      if (title) {
        store.events.activeEvent.title = title
        changeError(null)
      } else {
        changeError('Please add a title')
      }
    },
    onBlurTitle: props => (e: Object): void => {
      const { activeEvent, replaceEvent } = props.store.events
      activeEvent.title = e.target.value
      if (activeEvent.title) {
        activeEvent.date = getDateFromEventId(activeEvent._id)
        replaceEvent(activeEvent)
      }
    },
    onChangeDatePicker: props => (event: Object, picker: Object): void => {
      const { changeError, store } = props
      const { activeEvent, replaceEvent } = store.events
      const datePassed = moment(picker.startDate, 'DD.MM.YYYY')
      if (datePassed) {
        activeEvent.date = datePassed
        replaceEvent(activeEvent)
      } else {
        changeError('Please choose a date')
      }
    },
    onChangeOrder: props => (e: Object): void => {
      const { store, changeError } = props
      store.events.activeEvent.order = e.target.value
      changeError(null)
    },
    onBlurOrder: props => (e: Object): void => {
      const { activeEvent, saveEvent } = props.store.events
      activeEvent.order = e.target.value
      saveEvent(activeEvent)
    },
    close: props => (): void => {
      props.store.events.getEvent(null)
    },
  }),
  observer,
)

const EditEvent = ({
  store,
  error,
  changeError,
  onChangeTitle,
  onBlurTitle,
  onChangeDatePicker,
  onChangeOrder,
  onBlurOrder,
  close,
}: {
  store: Object,
  error: string,
  changeError: () => void,
  onChangeTitle: () => void,
  onBlurTitle: () => void,
  onChangeDatePicker: () => void,
  onChangeOrder: () => void,
  onBlurOrder: () => void,
  close: () => void,
}) => (
  <Modal show onHide={close} bsSize="large" dialogClassName="editEvent">
    <Modal.Header closeButton>
      <Modal.Title>
        Edit event
      </Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <FormGroup controlId="eventTitle">
        <ControlLabel>Title</ControlLabel>
        <FormControl
          type="text"
          value={store.events.activeEvent.title}
          onChange={onChangeTitle}
          onBlur={onBlurTitle}
          tabIndex={1}
        />
      </FormGroup>
      <DateInput
        date={getDateFromEventId(store.events.activeEvent._id)}
        onChangeDatePicker={onChangeDatePicker}
      />
      <EventTypeButtonGroup />
      <FormGroup controlId="eventOrder">
        <ControlLabel>Order</ControlLabel>
        <FormControl
          type="number"
          value={store.events.activeEvent.order}
          onChange={onChangeOrder}
          onBlur={onBlurOrder}
          tabIndex={4}
          style={inputStyle}
        />
      </FormGroup>
      <TagsInput />
      <EventLinks />
      {error &&
        <Alert bsStyle="danger" style={alertStyle}>
          {error}
        </Alert>}
    </Modal.Body>

    <Modal.Footer>
      <Button onClick={close}>
        close
      </Button>
    </Modal.Footer>

  </Modal>
)

EditEvent.displayName = 'EditEvent'

export default enhance(EditEvent)
