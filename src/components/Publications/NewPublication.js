//
import React, { useContext, useState, useCallback } from 'react'
import {
  Modal,
  Button,
  Alert,
  FormGroup,
  ControlLabel,
  FormControl,
} from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import storeContext from '../../storeContext'

const ErrorAlert = styled(Alert)`
  margin-bottom: 10px;
`

const categoryOptions = publicationCategories => {
  const options = publicationCategories.map((category, index) => (
    <option key={index + 1} value={category}>
      {category}
    </option>
  ))
  options.unshift(<option key={0} value={null} />)
  return options
}

const NewPublication = () => {
  const store = useContext(storeContext)
  const {
    setShowNewPublication,
    getPublicationCategories,
    newPublication,
  } = store.publications
  const publicationCategories = getPublicationCategories()

  const [title, changeTitle] = useState('')
  const [category, changeCategory] = useState('')
  const [error, changeError] = useState('')

  const onChangeTitle = useCallback(
    event => changeTitle(event.target.value),
    [],
  )
  const onChangeCategory = useCallback(
    event => changeCategory(event.target.value),
    [],
  )
  const createNewPublication = useCallback(() => {
    if (title && category) {
      newPublication(category, title)
      setShowNewPublication(false)
    } else {
      const error = title ? 'Please choose a category' : 'Please set a title'
      changeError(error)
    }
  }, [category, newPublication, setShowNewPublication, title])
  const close = useCallback(() => {
    setShowNewPublication(false)
  }, [setShowNewPublication])

  return (
    <Modal show onHide={close} bsSize="large">
      <Modal.Header>
        <Modal.Title>New publication</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FormGroup controlId="event">
          <ControlLabel>Title</ControlLabel>
          <FormControl
            type="text"
            value={title}
            onChange={onChangeTitle}
            tabIndex={1}
            autoFocus
          />
        </FormGroup>
        <FormGroup controlId="category">
          <ControlLabel>Category</ControlLabel>
          <FormControl
            componentClass="select"
            value={category}
            onChange={onChangeCategory}
            tabIndex={2}
          >
            {categoryOptions(publicationCategories)}
          </FormControl>
        </FormGroup>
        {error && <ErrorAlert bsStyle="danger">{error}</ErrorAlert>}
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={close}>discard input and close</Button>
        <Button bsStyle="primary" onClick={createNewPublication}>
          create new publication
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default observer(NewPublication)
