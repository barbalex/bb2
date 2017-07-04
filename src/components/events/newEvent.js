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
import styled from 'styled-components'

import DateInput from './dateInput.js'

const StyledAlert = styled(Alert)`
  margin-top: 10px;
  margin-bottom: 10px;
`

const enhance = compose(
  inject(`store`),
  withState('title', 'changeTitle', ''),
  withState('date', 'changeDate', moment()),
  withState('error', 'changeError', null),
  withHandlers({
    onChangeTitle: props => (event: Object): void =>
      props.changeTitle(event.target.value),
    onChangeDatePicker: props => (event: Object, picker: Object): void =>
      props.changeDate(moment(picker.startDate, 'DD.MM.YYYY')),
    close: props => () => props.store.events.setShowNewEvent(false),
    createNewEvent: props => () => {
      const { title, date, store } = props
      if (title && date) {
        store.events.newEvent({ date, title })
        props.store.events.setShowNewEvent(false)
      } else {
        const error = !!title ? 'Please choose a date' : 'Please add a title'
        props.changeError(error)
      }
    },
  }),
  observer
)

const NewEvent = ({
  store,
  title,
  date,
  error,
  onChangeTitle,
  onChangeDatePicker,
  close,
  createNewEvent,
}: {
  store: Object,
  title: string,
  date: Date,
  error: string,
  onChangeTitle: () => void,
  onChangeDatePicker: () => void,
  close: () => void,
  createNewEvent: () => void,
}) =>
  <Modal show onHide={close} bsSize="large" dialogClassName="editEvent">
    <Modal.Header>
      <Modal.Title>New event</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <FormGroup controlId="newEventTitle">
        <ControlLabel>Title</ControlLabel>
        <FormControl
          type="text"
          value={title}
          onChange={onChangeTitle}
          autoFocus
          tabIndex={1}
        />
      </FormGroup>
      <DateInput date={date} onChangeDatePicker={onChangeDatePicker} />
      {error &&
        <StyledAlert bsStyle="danger">
          {error}
        </StyledAlert>}
    </Modal.Body>

    <Modal.Footer>
      <Button onClick={close}>discard input and close</Button>
      <Button bsStyle="primary" onClick={createNewEvent}>
        create new event
      </Button>
    </Modal.Footer>
  </Modal>

NewEvent.displayName = 'NewEvent'

export default enhance(NewEvent)
