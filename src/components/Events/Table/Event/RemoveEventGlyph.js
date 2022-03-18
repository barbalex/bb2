//
import React, { useCallback, useState, useContext } from 'react'
import {
  Glyphicon,
  OverlayTrigger,
  Popover,
  ButtonToolbar,
  Button,
} from 'react-bootstrap'
import styled from 'styled-components'
import { gql, useApolloClient } from '@apollo/client'

import StoreContext from '../../../../storeContext'

const StyledGlyphicon = styled(Glyphicon)`
  font-size: 0.9em;
  color: red;
  padding-left: 8px;
  cursor: pointer;
`

const RemoveEventGlyph = ({ event }) => {
  const client = useApolloClient()
  const store = useContext(StoreContext)

  const [open, setOpen] = useState(true)

  const onClickYes = useCallback(async () => {
    try {
      await client.mutate({
        mutation: gql`
          mutation mutateEvent($id: uuid!) {
            delete_event_by_pk(id: $id) {
              id
            }
          }
        `,
        variables: { id: event.id },
        refetchQueries: ['eventsForEvetsPageQuery'],
      })
    } catch (error) {
      store.error.showError(error)
    }
    setOpen(false)
  }, [client, event.id, store.error])

  const onClickNo = useCallback(() => {
    setOpen(false)
    // trick to make overlay re-open-able
    setTimeout(() => setOpen(true))
  }, [])

  const popover = (
    <Popover id="popoverRemoveEvent" title="Delete this event?">
      <ButtonToolbar>
        <Button bsSize="small" bsStyle="danger" onClick={onClickYes}>
          Yes
        </Button>
        <Button bsSize="small" onClick={onClickNo}>
          No
        </Button>
      </ButtonToolbar>
    </Popover>
  )

  if (open) {
    return (
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <StyledGlyphicon glyph="remove-circle" />
      </OverlayTrigger>
    )
  }
  return <StyledGlyphicon glyph="remove-circle" />
}

export default RemoveEventGlyph
