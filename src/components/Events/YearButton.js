import React, { useContext, useCallback } from 'react'
import { Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

import storeContext from '../../storeContext'

const YearButton = ({ year }) => {
  const store = useContext(storeContext)
  const { activeYear, setActiveYear } = store.yearsOfEvents
  const { getEvents } = store.events

  const onClick = useCallback(() => {
    getEvents([year])
    setActiveYear(year)
  }, [getEvents, setActiveYear, year])

  return (
    <Button active={activeYear === year} onClick={onClick}>
      {year}
    </Button>
  )
}
export default observer(YearButton)
