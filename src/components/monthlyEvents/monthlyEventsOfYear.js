// @flow
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { PanelGroup } from 'react-bootstrap'
import has from 'lodash/has'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'

import MonthlyEvent from './monthlyEvent.js'
import getYearFromEventId from '../../modules/getYearFromEventId.js'
import getMonthFromEventId from '../../modules/getMonthFromEventId.js'

const enhance = compose(
  inject(`store`),
  withHandlers({
    onClickMonthlyEvent: props => (id: string, event: Object): void => {
      const { activeMonthlyEvent, store } = props
      // prevent higher level panels from reacting
      event.stopPropagation()
      const idToGet = !activeMonthlyEvent ||
        (activeMonthlyEvent._id && activeMonthlyEvent._id !== id)
        ? id
        : null
      store.monthlyEvents.getMonthlyEvent(idToGet)
    },
    onClickEventCollapse: props => (event: Object): void => {
      // prevent higher level panels from reacting
      event.stopPropagation()
    },
  }),
  observer,
)

class MonthlyEventsOfYear extends Component {
  displayName: 'MonthlyEventsOfYear'

  props: {
    store: Object,
    year: string,
    monthlyEvents: Array<Object>,
    activeMonthlyEvent: Object,
    onClickMonthlyEvent: () => void,
    onClickEventCollapse: () => void,
  }

  componentDidMount() {
    // somehow on first load the panel does not scroll up far enough
    // call for more
    this.scrollToActivePanel('more')
  }

  componentDidUpdate(prevProps) {
    if (this.props.activeMonthlyEvent) {
      const activeMonthlyEventChanged =
        !prevProps.activeMonthlyEvent ||
        this.props.activeMonthlyEvent._id !== prevProps.activeMonthlyEvent._id
      if (activeMonthlyEventChanged) {
        // this is later rerender
        // only scroll into view if the active item changed last render
        this.scrollToActivePanel()
      }
    }
  }

  scrollToActivePanel(more) {
    // $FlowIssue
    const node = ReactDOM.findDOMNode(this._activeMonthlyEventPanel)
    if (node) {
      const navWrapperOffsetTop = document.getElementById('nav-wrapper')
        .offsetTop
      let reduce = navWrapperOffsetTop > 0 ? navWrapperOffsetTop - 30 : 52
      // somehow on first load the panel does not scroll up far enough
      if (more) reduce -= 5
      if (node.offsetTop) {
        window.$('html, body').animate(
          {
            scrollTop: node.offsetTop - reduce,
          },
          500,
        )
      }
    }
  }

  monthlyEventsComponent(year) {
    const {
      store,
      activeMonthlyEvent,
      onClickMonthlyEvent,
      onClickEventCollapse,
    } = this.props
    let { monthlyEvents } = this.props
    // filter only events of current year
    monthlyEvents = monthlyEvents.filter(
      monthlyEvent => getYearFromEventId(monthlyEvent._id) === year,
    )
    return monthlyEvents.map((doc, dIndex) => {
      const isActiveMonthlyEvent = has(activeMonthlyEvent, '_id')
        ? doc._id === activeMonthlyEvent._id
        : false
      const month = getMonthFromEventId(doc._id)
      const panelHeadingStyle = {
        position: 'relative',
      }
      const panelBodyStyle = {
        maxHeight: window.innerHeight - 127,
        overflowY: 'auto',
      }
      const ref = isActiveMonthlyEvent
        ? '_activeMonthlyEventPanel'
        : `_monthlyEventPanel${doc._id}`

      // use pure bootstrap.
      // advantage: can add edit icon to panel-heading
      return (
        <div
          key={dIndex}
          ref={c => {
            // $FlowIssue
            this[ref] = c
          }}
          className="panel panel-default month"
        >
          <div
            className="panel-heading"
            role="tab"
            id={`heading${dIndex}`}
            onClick={onClickMonthlyEvent.bind(this, doc._id)}
            style={panelHeadingStyle}
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
          </div>
          {isActiveMonthlyEvent &&
            <div
              id={`#collapse${dIndex}`}
              className="panel-collapse collapse in"
              role="tabpanel"
              aria-labelledby={`heading${dIndex}`}
              onClick={onClickEventCollapse}
            >
              <div className="panel-body" style={panelBodyStyle}>
                <MonthlyEvent
                  activeMonthlyEvent={activeMonthlyEvent}
                  year={year}
                  month={month}
                />
              </div>
            </div>}
        </div>
      )
    })
  }

  render() {
    const { year, activeMonthlyEvent } = this.props
    const activeEventId = has(activeMonthlyEvent, '_id')
      ? activeMonthlyEvent._id
      : null

    return (
      <PanelGroup
        activeKey={activeEventId}
        id={year}
        ref={c => {
          // $FlowIssue
          this[year] = c
        }}
        accordion
      >
        {this.monthlyEventsComponent(year)}
      </PanelGroup>
    )
  }
}

export default enhance(MonthlyEventsOfYear)
