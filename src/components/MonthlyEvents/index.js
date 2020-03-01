//
import React, { useContext, useState, useEffect, useMemo } from 'react'
import { PanelGroup, Panel } from 'react-bootstrap'
import uniq from 'lodash/uniq'
import has from 'lodash/has'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import DocumentTitle from 'react-document-title'

import getYearFromEventId from '../../modules/getYearFromEventId'
import MonthlyEventsOfYear from './MonthlyEventsOfYear'
import oceanDarkImage from '../../images/oceanDark.jpg'
import storeContext from '../../storeContext'

const Container = styled.div`
  p,
  div {
    font-size: medium;
  }
  margin-bottom: 20px !important;
  .panel-body {
    padding: 0 0 !important;
  }
  .panel-group {
    margin-bottom: 0 !important;
  }
  .panel.month {
    margin-top: 0 !important;
    border-radius: 0 !important;
    border-top-width: 0 !important;
    border-right-width: 0 !important;
    border-left-width: 0 !important;
  }
  .panel.month > .panel-heading {
    background-color: transparent !important;
  }
  .panel.month .panel-heading:hover {
    background-color: #f5f5f5 !important;
  }
  .panel-heading {
    cursor: pointer !important;
  }
  .panel.month > .panel-heading h4 {
    font-weight: bold !important;
    z-index: 0 !important;
  }
  .panel.month:last-of-type {
    border-bottom-width: 0 !important;
  }
  .panel.month .panel-body table {
    margin-left: 0 !important;
    width: 100% !important;
  }
`
const StyledPanelHeading = styled(Panel.Heading)`
  background-image: url(${oceanDarkImage});
  border-radius-top-left: 3px;
  border-radius-top-right: 3px;
  color: #edf4f8 !important;
  font-weight: bold !important;
`

const MonthlyEvents = ({ year, month }) => {
  const store = useContext(storeContext)
  const {
    getMonthlyEvents,
    getMonthlyEvent,
    monthlyEvents,
    activeMonthlyEvent,
  } = store.monthlyEvents

  const yearsOfEvents = useMemo(() => {
    const allYears = monthlyEvents.map(doc => getYearFromEventId(doc._id))
    if (allYears.length > 0) {
      const years = uniq(allYears)
      return years.sort().reverse()
    }
    return []
  }, [monthlyEvents])

  const [activeYearChoosen, setActiveYearChoosen] = useState(null)

  const activeYear = useMemo(() => {
    if (has(activeMonthlyEvent, '_id')) {
      return getYearFromEventId(activeMonthlyEvent._id)
    } else if (!!activeYearChoosen) {
      return activeYearChoosen
    } else {
      return yearsOfEvents[0]
    }
  }, [activeMonthlyEvent, activeYearChoosen, yearsOfEvents])

  useEffect(() => {
    store.page.getPage('pages_monthlyEvents')
    getMonthlyEvents()
  }, [getMonthlyEvents, store.page])

  useEffect(() => {
    if (!!year && !!month) {
      store.monthlyEvents.activeMonthlyEventId = `monthlyEvents_${year}_${month}`
    }
  }, [year, month, store.monthlyEvents.activeMonthlyEventId])

  return (
    <DocumentTitle title="Events">
      <Container id="monthlyEvents">
        <h1>Events Archive</h1>
        <PanelGroup
          id={`monthlyEvents`}
          defaultActiveKey={activeYear}
          accordion
        >
          {yearsOfEvents.map(year => (
            <Panel
              key={year}
              header={year}
              eventKey={year}
              onClick={() => {
                setActiveYearChoosen(activeYear)
                // make sure no monthlyEvent is loaded
                // i.e. if an monthlyEvent was loaded it is unloaded
                getMonthlyEvent(null)
              }}
            >
              <StyledPanelHeading>{year}</StyledPanelHeading>
              <MonthlyEventsOfYear year={year} />
            </Panel>
          ))}
        </PanelGroup>
      </Container>
    </DocumentTitle>
  )
}

export default observer(MonthlyEvents)
