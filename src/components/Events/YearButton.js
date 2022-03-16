import React, { useCallback } from 'react'
import { Button } from 'react-bootstrap'

const YearButton = ({ year, activeYear, setActiveYear }) => {
  const onClick = useCallback(() => setActiveYear(year), [setActiveYear, year])

  return (
    <Button active={activeYear === year} onClick={onClick}>
      {year}
    </Button>
  )
}
export default YearButton
