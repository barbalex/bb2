import React, { useCallback } from 'react'
import { Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

const YearButton = ({ year, activeYear, setActiveYear }) => {
  const onClick = useCallback(() => setActiveYear(year), [setActiveYear, year])

  return (
    <Button active={activeYear === year} onClick={onClick}>
      {year}
    </Button>
  )
}
export default observer(YearButton)
