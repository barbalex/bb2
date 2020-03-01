import React, { useContext, useCallback, useRef, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import has from 'lodash/has'
import styled from 'styled-components'

import storeContext from '../../storeContext'
import getYearFromEventId from '../../modules/getYearFromEventId'
import MonthlyEvent from './MonthlyEvent'
import getMonthFromEventId from '../../modules/getMonthFromEventId'

const PanelHeading = styled.div`
  position: relative;
`
const PanelBody = styled.div`
  max-height: ${typeof window !== `undefined` ? window.innerHeight - 127 : 1}px;
  overflow-y: auto;
`

const MonthlyEventPanel = ({ doc, dIndex, year }) => {
  const store = useContext(storeContext)
  const { activeMonthlyEvent, getMonthlyEvent } = store.monthlyEvents

  const isActiveMonthlyEvent = has(activeMonthlyEvent, '_id')
    ? doc._id === activeMonthlyEvent._id
    : false
  const month = getMonthFromEventId(doc._id)

  const onClickMonthlyEvent = useCallback(
    (id, event) => {
      // prevent higher level panels from reacting
      event.stopPropagation()
      const idToGet =
        !activeMonthlyEvent ||
        (activeMonthlyEvent._id && activeMonthlyEvent._id !== id)
          ? id
          : null
      getMonthlyEvent(idToGet)
    },
    [activeMonthlyEvent, getMonthlyEvent],
  )
  const onClickEventCollapse = useCallback(event => {
    // prevent higher level panels from reacting
    event.stopPropagation()
  }, [])

  const ref = useRef(null)
  const scrollToActivePanel = useCallback(() => {
    if (typeof window !== `undefined`) {
      window.scrollTo({
        left: 0,
        top: ref.current ? ref.current.offsetTop - 55 : 55,
        behavior: 'smooth',
      })
    }
  }, [])

  useEffect(() => {
    if (!!activeMonthlyEvent) scrollToActivePanel()
  }, [activeMonthlyEvent, scrollToActivePanel])

  // use pure bootstrap.
  // advantage: can add edit icon to panel-heading
  return (
    <div key={dIndex} className="panel panel-default month">
      <PanelHeading
        className="panel-heading"
        role="tab"
        id={`heading${dIndex}`}
        onClick={onClickMonthlyEvent.bind(this, doc._id)}
        ref={ref}
      >
        <h4 className="panel-title">
          <a
            role="button"
            data-toggle="collapse"
            data-parent={`#${year}`}
            href={`#collapse${dIndex}`}
            aria-expanded="false"
            aria-controls={`#collapse${dIndex}`}
          >
            {month}
          </a>
        </h4>
      </PanelHeading>
      {isActiveMonthlyEvent && (
        <div
          id={`#collapse${dIndex}`}
          className="panel-collapse collapse in"
          role="tabpanel"
          aria-labelledby={`heading${dIndex}`}
          onClick={onClickEventCollapse}
        >
          <PanelBody className="panel-body">
            <MonthlyEvent year={year} month={month} />
          </PanelBody>
        </div>
      )}
    </div>
  )
}

export default observer(MonthlyEventPanel)
