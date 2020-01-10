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

const NewArticle = () => {
  const store = useContext(storeContext)
  const { newArticle, toggleShowNewArticle } = store.articles

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
  const createNewArticle = useCallback(() => {
    if (title && date) {
      newArticle(title, date)
      toggleShowNewArticle()
    } else {
      let error = 'Please choose a date'
      if (!title) error = 'Please add a title'
      changeError({ error })
    }
  }, [title, date, newArticle, toggleShowNewArticle])
  const onCloseNewArticle = useCallback(() => toggleShowNewArticle(), [
    toggleShowNewArticle,
  ])

  return (
    <Modal show bsSize="large">
      <Modal.Header>
        <Modal.Title>New article</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FormGroup controlId="articleTitle">
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
        <Button onClick={onCloseNewArticle}>discard input and close</Button>
        <Button bsStyle="primary" onClick={createNewArticle}>
          create new article
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

NewArticle.displayName = 'NewArticle'

export default observer(NewArticle)
