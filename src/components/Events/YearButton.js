import React, { useContext, useCallback } from 'react'
import { Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

import storeContext from '../../storeContext'

const YearButton = ({ year }) => {
  const store = useContext(storeContext)
  const { activeEventYears, setActiveEventYears } = store.yearsOfEvents
  const { getEvents } = store.events

  const onClick = useCallback(() => {
    getEvents([year])
    setActiveEventYears([year])
  }, [getEvents, setActiveEventYears, year])

  return (
    <Button active={activeEventYears.includes(year)} onClick={onClick}>
      {year}
    </Button>
  )
}
export default observer(YearButton)
