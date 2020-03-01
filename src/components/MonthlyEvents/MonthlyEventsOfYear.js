//
import React, { useContext } from 'react'
import { PanelGroup } from 'react-bootstrap'
import has from 'lodash/has'
import { observer } from 'mobx-react-lite'

import MonthlyEventPanel from './MonthlyEventPanel'
import getYearFromEventId from '../../modules/getYearFromEventId'
import SwallowPanelGroupProps from '../shared/SwallowPanelGroupProps'
import storeContext from '../../storeContext'

const MonthlyEventsOfYear = ({ year }) => {
  const store = useContext(storeContext)
  const { activeMonthlyEvent, monthlyEvents } = store.monthlyEvents
  const activeEventId = has(activeMonthlyEvent, '_id')
    ? activeMonthlyEvent._id
    : null

  return (
    <PanelGroup defaultActiveKey={activeEventId} id={year} accordion>
      <SwallowPanelGroupProps>
        {monthlyEvents
          .filter(monthlyEvent => getYearFromEventId(monthlyEvent._id) === year)
          .map((doc, dIndex) => (
            <MonthlyEventPanel
              key={dIndex}
              doc={doc}
              dIndex={dIndex}
              year={year}
            />
          ))}
      </SwallowPanelGroupProps>
    </PanelGroup>
  )
}

export default observer(MonthlyEventsOfYear)
