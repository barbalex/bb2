//
import React, { useCallback } from 'react'
import { Glyphicon, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { gql, useApolloClient } from '@apollo/client'

const StyledGlyphicon = styled(Glyphicon)`
  font-size: 0.9em;
  color: red;
  padding-left: 8px;
  cursor: pointer;
`

const RemoveEventGlyph = ({ event }) => {
  const client = useApolloClient()

  const onRemoveEvent = useCallback(async () => {
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
      console.log(error)
    }
  }, [client, event.id])

  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id="removeThisEvent">remove</Tooltip>}
    >
      <StyledGlyphicon glyph="remove-circle" onClick={onRemoveEvent} />
    </OverlayTrigger>
  )
}

export default observer(RemoveEventGlyph)
