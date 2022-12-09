import React, { useCallback, useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import { navigate } from 'gatsby'

import MonthlyEvent from './MonthlyEvent'
import months from '../../modules/months'

const PanelHeading = styled.div`
  position: relative;
`
const PanelBody = styled.div`
  max-height: ${typeof window !== `undefined` ? window.innerHeight - 127 : 1}px;
  overflow-y: auto;
`

const MonthlyEventPanel = ({ year, month, activeMonth, activeYear }) => {
  const isActiveMonthlyEvent = year === activeYear && month === activeMonth

  const onClickMonthlyEvent = useCallback(() => {
    const to = isActiveMonthlyEvent
      ? `/monthly-events`
      : `/monthly-events/${year}/${month}`
    navigate(to)
  }, [isActiveMonthlyEvent, month, year])
  const onClickEventCollapse = useCallback((event) => {
    // prevent higher level panels from reacting
    event.stopPropagation()
  }, [])

  const ref = useRef(null)
  useEffect(() => {
    if (isActiveMonthlyEvent) {
      window.scrollTo({
        left: 0,
        top: ref.current ? ref.current.offsetTop - 55 : 55,
        behavior: 'smooth',
      })
    }
  }, [isActiveMonthlyEvent])

  // use pure bootstrap.
  // advantage: can add edit icon to panel-heading
  return (
    <div
      key={`${year}/${month}/EventPanel`}
      className="panel panel-default month"
    >
      <PanelHeading
        className="panel-heading"
        role="tab"
        id={`heading/${year}/${month}/EventPanel`}
        onClick={onClickMonthlyEvent}
        ref={ref}
      >
        <h4 className="panel-title">
          <a
            role="button"
            data-toggle="collapse"
            data-parent={`#${year}`}
            href={`#collapse/${year}/${month}/EventPanel`}
            aria-expanded="false"
            aria-controls={`#collapse/${year}/${month}/EventPanel`}
          >
            {months[month]}
          </a>
        </h4>
      </PanelHeading>
      {isActiveMonthlyEvent && (
        <div
          id={`#collapse/${year}/${month}/EventPanel`}
          className="panel-collapse collapse in"
          role="tabpanel"
          aria-labelledby={`heading/${year}/${month}/EventPanel`}
          onClick={onClickEventCollapse}
        >
          <PanelBody className="panel-body">
            <MonthlyEvent year={year} month={activeMonth} />
          </PanelBody>
        </div>
      )}
    </div>
  )
}

export default MonthlyEventPanel
