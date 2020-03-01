//
import React, { useContext, useCallback, useState } from 'react'
import {
  Modal,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
} from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

import storeContext from '../../storeContext'

const MonthlyEventsMeta = ({ year, month, onCloseMeta }) => {
  const store = useContext(storeContext)
  const { activeMonthlyEvent, saveMonthlyEvent } = store.monthlyEvents

  const [arrivals, setArrivals] = useState(activeMonthlyEvent.arrivals)
  const [victims, setVictims] = useState(activeMonthlyEvent.victims)

  const onBlurArrivals = useCallback(
    event => {
      const value = parseInt(event.target.value, 10)
      activeMonthlyEvent.arrivals = value
      saveMonthlyEvent(activeMonthlyEvent)
      setArrivals(value)
    },
    [activeMonthlyEvent, saveMonthlyEvent],
  )
  const onBlurVictims = useCallback(
    event => {
      const value = parseInt(event.target.value, 10)
      activeMonthlyEvent.victims = value
      saveMonthlyEvent(activeMonthlyEvent)
      setVictims(value)
    },
    [activeMonthlyEvent, saveMonthlyEvent],
  )

  return (
    <Modal show onHide={onCloseMeta} bsSize="large">
      <Modal.Header>
        <Modal.Title>
          Arrivals & Victims in {month} {year}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FormGroup controlId="arrivals">
          <ControlLabel>Arrivals</ControlLabel>
          <FormControl
            type="number"
            defaultValue={arrivals}
            onBlur={onBlurArrivals}
            autoFocus
          />
        </FormGroup>
        <FormGroup controlId="victims">
          <ControlLabel>Victims</ControlLabel>
          <FormControl
            type="number"
            defaultValue={victims}
            onBlur={onBlurVictims}
            autoFocus
          />
        </FormGroup>
      </Modal.Body>

      <Modal.Footer>
        <Button bsStyle="primary" onClick={onCloseMeta}>
          close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default observer(MonthlyEventsMeta)
