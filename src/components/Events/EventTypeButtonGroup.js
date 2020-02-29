import React, { useContext, useEffect, useCallback } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import storeContext from '../../storeContext'

const Container = styled.div`
  margin-bottom: 20px;
`
const Label = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`

const EventTypeButtonGroup = () => {
  const store = useContext(storeContext)
  const { activeEvent, saveEvent } = store.events
  const { eventType } = store.events.activeEvent

  const setTypeToMigration = useCallback(() => {
    store.events.activeEvent.eventType = 'migration'
    saveEvent(activeEvent)
  }, [activeEvent, saveEvent, store.events.activeEvent.eventType])
  const setTypeToPolitics = useCallback(() => {
    store.events.activeEvent.eventType = 'politics'
    saveEvent(activeEvent)
  }, [activeEvent, saveEvent, store.events.activeEvent.eventType])

  useEffect(() => {
    // if no eventType, set migration
    if (!eventType) setTypeToMigration()
  }, [eventType, setTypeToMigration])

  return (
    <Container>
      <Label>Column</Label>
      <ButtonGroup>
        <Button
          className={eventType === 'migration' ? 'active' : ''}
          onClick={setTypeToMigration}
        >
          maritime events / monthly statistics
        </Button>
        <Button
          className={eventType === 'politics' ? 'active' : ''}
          onClick={setTypeToPolitics}
        >
          political events / total statistics
        </Button>
      </ButtonGroup>
    </Container>
  )
}

export default observer(EventTypeButtonGroup)
