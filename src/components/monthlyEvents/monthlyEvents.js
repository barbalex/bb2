// @flow
import React, { Component } from 'react'
import { PanelGroup, Panel } from 'react-bootstrap'
import uniq from 'lodash/uniq'
import has from 'lodash/has'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'

import getYearFromEventId from '../../modules/getYearFromEventId.js'
import MonthlyEventsOfYear from './monthlyEventsOfYear.js'

const containerStyle = {
  marginBottom: 20,
}

const enhance = compose(
  inject(`store`),
  withState('activeYear', 'changeActiveYear', null),
  withHandlers({
    onClickYear: props => (activeYear: number): void => {
      const { changeActiveYear, store } = props
      changeActiveYear(activeYear)
      // make sure no monthlyEvent is loaded
      // i.e. if an monthlyEvent was loaded it is unloaded
      store.monthlyEvents.getMonthlyEvent(null)
    },
  }),
  observer,
)

class MonthlyEvents extends Component {
  displayName: 'MonthlyEvents'

  props: {
    store: Object,
    monthlyEvents: Array<Object>,
    activeMonthlyEvent: Object,
    activeYear: number,
    editing: boolean,
    email: string,
    onSaveMonthlyEventArticle: () => void,
    changeActiveYear: () => void,
    onClickYear: () => void,
  }

  componentDidMount() {
    this.props.store.monthlyEvents.getMonthlyEvents()
  }

  yearsOfEvents() {
    const { monthlyEvents } = this.props
    const allYears = monthlyEvents.map(doc => getYearFromEventId(doc._id))
    if (allYears.length > 0) {
      const years = uniq(allYears)
      return years.sort().reverse()
    }
    return []
  }

  mostRecentYear() {
    const years = this.yearsOfEvents()
    return years[0]
  }

  eventYearsComponent(activeYear) {
    const {
      activeMonthlyEvent,
      editing,
      email,
      onSaveMonthlyEventArticle,
      onClickYear,
    } = this.props
    let { monthlyEvents } = this.props
    const years = this.yearsOfEvents()

    if (monthlyEvents.length > 0 && years.length > 0) {
      return years.map(year => {
        const className = year === activeYear
          ? 'year active'
          : 'year not-active'
        // wanted to only build MonthlyEventsOfYear if isActiveYear
        // but opening a year was way to hideous
        return (
          <Panel
            key={year}
            header={year}
            eventKey={year}
            className={className}
            onClick={onClickYear.bind(this, year)}
          >
            <MonthlyEventsOfYear
              year={year}
              monthlyEvents={monthlyEvents}
              activeMonthlyEvent={activeMonthlyEvent}
              editing={editing}
              email={email}
              onSaveMonthlyEventArticle={onSaveMonthlyEventArticle}
            />
          </Panel>
        )
      })
    }
    return null
  }

  render() {
    const { activeMonthlyEvent } = this.props
    let activeYear
    if (has(activeMonthlyEvent, '_id')) {
      activeYear = getYearFromEventId(activeMonthlyEvent._id)
    } else {
      activeYear = this.props.activeYear
        ? this.props.activeYear
        : this.mostRecentYear()
    }

    return (
      <div id="monthlyEvents" style={containerStyle}>
        <h1>
          Events Archive
        </h1>
        <PanelGroup activeKey={activeYear} accordion>
          {this.eventYearsComponent(activeYear)}
        </PanelGroup>
      </div>
    )
  }
}

export default enhance(MonthlyEvents)
