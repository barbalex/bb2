//
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { PanelGroup } from 'react-bootstrap'
import has from 'lodash/has'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import styled from 'styled-components'

import MonthlyEvent from './MonthlyEvent'
import getYearFromEventId from '../../modules/getYearFromEventId'
import getMonthFromEventId from '../../modules/getMonthFromEventId'
import SwallowPanelGroupProps from '../shared/SwallowPanelGroupProps'

const PanelHeading = styled.div`
  position: relative;
`
const PanelBody = styled.div`
  max-height: ${typeof window !== `undefined` ? window.innerHeight - 127 : 1}px;
  overflow-y: auto;
`

const enhance = compose(
  inject('store'),
  withHandlers({
    onClickMonthlyEvent: props => (id, event) => {
      const { activeMonthlyEvent, getMonthlyEvent } = props.store.monthlyEvents
      // prevent higher level panels from reacting
      event.stopPropagation()
      const idToGet =
        !activeMonthlyEvent ||
        (activeMonthlyEvent._id && activeMonthlyEvent._id !== id)
          ? id
          : null
      getMonthlyEvent(idToGet)
    },
    onClickEventCollapse: props => event => {
      // prevent higher level panels from reacting
      event.stopPropagation()
    },
  }),
  observer,
)

class MonthlyEventsOfYear extends Component {
  componentDidMount() {
    // somehow on first load the panel does not scroll up far enough
    // call for more
    this.scrollToActivePanel('more')
  }

  componentDidUpdate(prevProps) {
    if (this.props.store.monthlyEvents.activeMonthlyEvent) {
      const activeMonthlyEventChanged =
        !prevProps.store.monthlyEvents.activeMonthlyEvent ||
        this.props.store.monthlyEvents.activeMonthlyEvent._id !==
          prevProps.store.monthlyEvents.activeMonthlyEvent._id
      if (activeMonthlyEventChanged) {
        // this is later rerender
        // only scroll into view if the active item changed last render
        this.scrollToActivePanel()
      }
    }
  }

  scrollToActivePanel = more => {
    const node = ReactDOM.findDOMNode(this._activeMonthlyEventPanel)
    if (node) {
      const navWrapperOffsetTop = document.getElementById('nav-wrapper')
        .offsetTop
      let reduce = navWrapperOffsetTop > 0 ? navWrapperOffsetTop - 30 : 52
      // somehow on first load the panel does not scroll up far enough
      if (more) reduce -= 5
      if (node.offsetTop && typeof window !== `undefined`) {
        window.scroll({ top: node.offsetTop - reduce, behavior: 'smooth' })
      }
    }
  }

  monthlyEventsComponent = year => {
    const { store, onClickMonthlyEvent, onClickEventCollapse } = this.props
    let { monthlyEvents, activeMonthlyEvent } = store.monthlyEvents
    // filter only events of current year
    monthlyEvents = monthlyEvents.filter(
      monthlyEvent => getYearFromEventId(monthlyEvent._id) === year,
    )
    return monthlyEvents.map((doc, dIndex) => {
      const isActiveMonthlyEvent = has(activeMonthlyEvent, '_id')
        ? doc._id === activeMonthlyEvent._id
        : false
      const month = getMonthFromEventId(doc._id)
      const ref = isActiveMonthlyEvent
        ? '_activeMonthlyEventPanel'
        : `_monthlyEventPanel${doc._id}`

      // use pure bootstrap.
      // advantage: can add edit icon to panel-heading
      return (
        <div
          key={dIndex}
          ref={c => {
            this[ref] = c
          }}
          className="panel panel-default month"
        >
          <PanelHeading
            className="panel-heading"
            role="tab"
            id={`heading${dIndex}`}
            onClick={onClickMonthlyEvent.bind(this, doc._id)}
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
    })
  }

  render() {
    const { year, store } = this.props
    const { activeMonthlyEvent } = store.monthlyEvents
    const activeEventId = has(activeMonthlyEvent, '_id')
      ? activeMonthlyEvent._id
      : null

    return (
      <PanelGroup
        defaultActiveKey={activeEventId}
        id={year}
        ref={c => {
          this[year] = c
        }}
        accordion
      >
        <SwallowPanelGroupProps>
          {this.monthlyEventsComponent(year)}
        </SwallowPanelGroupProps>
      </PanelGroup>
    )
  }
}

export default enhance(MonthlyEventsOfYear)
