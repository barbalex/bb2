//
import React from 'react'
import { PanelGroup } from 'react-bootstrap'

import MonthlyEventPanel from './MonthlyEventPanel'

const months = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

const MonthlyEventsOfYear = ({ year, activeYear, activeMonth }) => {
  return (
    <PanelGroup
      defaultActiveKey={`${activeYear}/${activeMonth}/PanelGroup`}
      id={year}
      accordion
    >
      {months.map((month) => (
        <MonthlyEventPanel
          key={`${year}/${month}/PanelGroup`}
          year={year}
          month={month}
          activeMonth={activeMonth}
          activeYear={activeYear}
        />
      ))}
    </PanelGroup>
  )
}

export default MonthlyEventsOfYear
