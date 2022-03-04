import React, { useEffect, useCallback } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 20px;
`
const Label = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`

const EventTypeButtonGroup = ({ activeEvent, saveToDb }) => {
  const setTypeToMigration = useCallback(
    () => saveToDb({ field: 'event_type', value: 'migration' }),
    [saveToDb],
  )
  const setTypeToPolitics = useCallback(
    () => saveToDb({ field: 'event_type', value: 'politics' }),
    [saveToDb],
  )

  useEffect(() => {
    // if no event_type, set migration
    if (!activeEvent.event_type) setTypeToMigration()
  }, [activeEvent.event_type, setTypeToMigration])

  return (
    <Container>
      <Label>Column</Label>
      <ButtonGroup>
        <Button
          className={activeEvent.event_type === 'migration' ? 'active' : ''}
          onClick={setTypeToMigration}
        >
          maritime events / monthly statistics
        </Button>
        <Button
          className={activeEvent.event_type === 'politics' ? 'active' : ''}
          onClick={setTypeToPolitics}
        >
          political events / total statistics
        </Button>
      </ButtonGroup>
    </Container>
  )
}

export default observer(EventTypeButtonGroup)
