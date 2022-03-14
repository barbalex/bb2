/**
 * using hooks errored
 * Hooks can only be called inside the body of a function component
 */
import React, { useState, useCallback, useContext, useEffect } from 'react'
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
import { gql, useQuery, useApolloClient } from '@apollo/client'

import EventTypeButtonGroup from './EventTypeButtonGroup'
import DateInput from '../DateInput'
import TagsInput from './TagsInput'
import EventLinks from './EventLinks'
import storeContext from '../../../storeContext'

const StyledModal = styled(Modal)`
  .col-xs-1,
  .col-sm-1,
  .col-md-1,
  .col-lg-1,
  .col-xs-2,
  .col-sm-2,
  .col-md-2,
  .col-lg-2,
  .col-xs-3,
  .col-sm-3,
  .col-md-3,
  .col-lg-3,
  .col-xs-4,
  .col-sm-4,
  .col-md-4,
  .col-lg-4,
  .col-xs-5,
  .col-sm-5,
  .col-md-5,
  .col-lg-5,
  .col-xs-6,
  .col-sm-6,
  .col-md-6,
  .col-lg-6,
  .col-xs-7,
  .col-sm-7,
  .col-md-7,
  .col-lg-7,
  .col-xs-8,
  .col-sm-8,
  .col-md-8,
  .col-lg-8,
  .col-xs-9,
  .col-sm-9,
  .col-md-9,
  .col-lg-9,
  .col-xs-10,
  .col-sm-10,
  .col-md-10,
  .col-lg-10,
  .col-xs-11,
  .col-sm-11,
  .col-md-11,
  .col-lg-11,
  .col-xs-12,
  .col-sm-12,
  .col-md-12,
  .col-lg-12 {
    padding-right: 0 !important;
  }
  .form-group {
    margin-bottom: 5px !important;
  }
  .event-tags {
    column-width: 250px;
    break-inside: avoid;
  }
  .event-tag input {
    position: relative;
    top: 2px;
  }
  .event-tag span {
    font-weight: normal;
    margin-left: 7px;
    cursor: pointer;
  }
`
// const EventOrder = styled(FormControl)`
//   margin-bottom: 20px;
// `
const StyledAlert = styled(Alert)`
  margin-top: 10px;
  margin-bottom: 10px;
`

const EditEvent = () => {
  const client = useApolloClient()
  const store = useContext(storeContext)
  const { activeEventId, setActiveEventId } = store.events

  const { data, loading } = useQuery(
    gql`
      query eventForEditEvent($id: uuid) {
        event(where: { id: { _eq: $id } }) {
          id
          datum
          event_type
          links
          tags
          title
        }
      }
    `,
    { variables: { id: activeEventId } },
  )
  const activeEvent = data?.event?.[0]

  const [error, setError] = useState(null)
  const [title, setTitle] = useState('')
  useEffect(() => {
    if (!loading) {
      setTitle(activeEvent.title)
    }
  }, [activeEvent, loading])

  const saveToDb = useCallback(
    async ({ field, value }) => {
      try {
        await client.mutate({
          mutation: gql`
        mutation mutateEvent($id: uuid!) {
          update_event_by_pk(
            pk_columns: { id: $id }
            _set: { ${field}: ${value} }
          ) {
            id
            datum
            event_type
            links
            tags
            title
          }
        }
      `,
          variables: { id: activeEvent.id },
        })
      } catch (error) {
        console.log(error)
      }
    },
    [activeEvent?.id, client],
  )

  const onChangeTitle = useCallback((e) => setTitle(e.target.value), [])
  const onBlurTitle = useCallback(
    (e) => {
      const title = e.target.value
      if (title) {
        saveToDb({ field: 'title', value: `"${title}"` })
        setError(null)
      } else {
        setError('Please add a title')
      }
    },
    [saveToDb],
  )
  const onChangeDatePicker = useCallback(
    (date) => {
      saveToDb({
        field: 'datum',
        value: date
          ? `"${moment(date, 'DD.MM.YYYY').format('YYYY-MM-DD')}"`
          : null,
      })
      if (!date) {
        setError('Please choose a date')
      }
    },
    [saveToDb],
  )
  const close = useCallback(() => {
    setActiveEventId(null)
  }, [setActiveEventId])

  if (loading) return null

  return (
    <StyledModal show onHide={close} bsSize="large">
      <Modal.Header closeButton>
        <Modal.Title>Edit event</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FormGroup controlId="eventTitle">
          <ControlLabel>Title</ControlLabel>
          <FormControl
            type="text"
            value={title}
            onChange={onChangeTitle}
            onBlur={onBlurTitle}
            tabIndex={1}
          />
        </FormGroup>
        <DateInput
          date={moment(activeEvent.datum, 'YYYY-MM-DD')}
          onChangeDatePicker={onChangeDatePicker}
        />
        <EventTypeButtonGroup activeEvent={activeEvent} saveToDb={saveToDb} />
        {/* <FormGroup controlId="eventOrder">
          <ControlLabel>Order</ControlLabel>
          <EventOrder
            type="number"
            value={activeEvent.order}
            onChange={onChangeOrder}
            onBlur={onBlurOrder}
            tabIndex={4}
          />
        </FormGroup> */}
        <TagsInput activeEvent={activeEvent} saveToDb={saveToDb} />
        <EventLinks activeEvent={activeEvent} />
        {error && <StyledAlert bsStyle="danger">{error}</StyledAlert>}
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={close}>close</Button>
      </Modal.Footer>
    </StyledModal>
  )
}

export default observer(EditEvent)
