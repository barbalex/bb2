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

import DateInput from '../events/dateInput.js'

const enhance = compose(
  inject(`store`),
  withState('title', 'changeTitle', ''),
  withState('date', 'changeDate', moment()),
  withState('error', 'changeError', null),
  withHandlers({
    onChangeTitle: props => event => props.changeTitle(event.target.value),
    onChangeDate: props => (event, picker) =>
      props.changeDate(moment(picker.startDate, 'DD.MM.YYYY')),
    createNewCommentary: props => () => {
      const { title, date } = props
      if (title && date) {
        props.store.commentaries.newCommentary(title, date)
        props.store.commentaries.toggleShowNewCommentary()
      } else {
        let error = 'Please choose a date'
        if (!title) error = 'Please add a title'
        props.store.error.showError({ error })
      }
    },
    onCloseNewCommentary: props => () =>
      props.store.commentaries.toggleShowNewCommentary(),
  }),
  observer,
)

const alertStyle = {
  marginBottom: 10,
}

const NewCommentary = ({
  onCloseNewCommentary,
  onChangeTitle,
  onChangeDate,
  createNewCommentary,
  title,
  date,
  error,
}: {
  onCloseNewCommentary: () => void,
  onChangeTitle: () => void,
  onChangeDate: () => void,
  createNewCommentary: () => void,
  title: string,
  date: Date,
  error: string,
}) => (
  <Modal show bsSize="large">
    <Modal.Header>
      <Modal.Title>
        New commentary
      </Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <FormGroup controlId="commentaryTitle">
        <ControlLabel>Title</ControlLabel>
        <FormControl
          type="text"
          value={title}
          onChange={onChangeTitle}
          autoFocus
          tabIndex={1}
        />
      </FormGroup>
      <DateInput date={date} onChangeDatePicker={onChangeDate} />
      {error &&
        <Alert bsStyle="danger" style={alertStyle}>
          {error}
        </Alert>}
    </Modal.Body>

    <Modal.Footer>
      <Button onClick={onCloseNewCommentary}>
        discard input and close
      </Button>
      <Button bsStyle="primary" onClick={createNewCommentary}>
        create new commentary
      </Button>
    </Modal.Footer>

  </Modal>
)

NewCommentary.displayName = 'NewCommentary'

export default enhance(NewCommentary)
