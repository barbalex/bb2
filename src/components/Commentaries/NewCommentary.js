// @flow
import React, { useContext, useState, useCallback } from 'react'
import {
  Modal,
  Button,
  Alert,
  FormGroup,
  ControlLabel,
  FormControl,
} from 'react-bootstrap'
import moment from 'moment'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import DateInput from '../Events/DateInput'
import storeContext from '../../storeContext'

const ErrorAlert = styled(Alert)`
  magrin-bottom: 10px;
`

const NewCommentary = () => {
  const store = useContext(storeContext)
  const { newCommentary, toggleShowNewCommentary } = store.commentaries

  const [title, changeTitle] = useState('')
  const [date, changeDate] = useState(moment())
  const [error, changeError] = useState(null)

  const onChangeTitle = useCallback(
    event => changeTitle(event.target.value),
    [],
  )
  const onChangeDate = useCallback(
    (date: Date) => changeDate(moment(date, 'DD.MM.YYYY')),
    [],
  )
  const createNewCommentary = useCallback(() => {
    if (title && date) {
      newCommentary(title, date)
      toggleShowNewCommentary()
    } else {
      let error = 'Please choose a date'
      if (!title) error = 'Please add a title'
      changeError({ error })
    }
  }, [title, date, newCommentary, toggleShowNewCommentary])
  const onCloseNewCommentary = useCallback(() => toggleShowNewCommentary(), [toggleShowNewCommentary])

  return (
    <Modal show bsSize="large">
      <Modal.Header>
        <Modal.Title>New commentary</Modal.Title>
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
        {error && <ErrorAlert bsStyle="danger">{error}</ErrorAlert>}
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onCloseNewCommentary}>discard input and close</Button>
        <Button bsStyle="primary" onClick={createNewCommentary}>
          create new commentary
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

NewCommentary.displayName = 'NewCommentary'

export default observer(NewCommentary)
