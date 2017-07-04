// @flow
import React, { Component } from 'react'
import { PanelGroup, Panel } from 'react-bootstrap'
import uniq from 'lodash/uniq'
import has from 'lodash/has'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'
import styled from 'styled-components'

import getYearFromEventId from '../../modules/getYearFromEventId'
import MonthlyEventsOfYear from './monthlyEventsOfYear'

const Container = styled.div`margin-bottom: 20px;`

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
  observer
)

class MonthlyEvents extends Component {
  displayName: 'MonthlyEvents'

  props: {
    store: Object,
    activeYear: number,
    changeActiveYear: () => void,
    onClickYear: () => void,
  }

  componentDidMount() {
    this.props.store.monthlyEvents.getMonthlyEvents()
  }

  yearsOfEvents = () => {
    const { monthlyEvents } = this.props.store.monthlyEvents
    const allYears = monthlyEvents.map(doc => getYearFromEventId(doc._id))
    if (allYears.length > 0) {
      const years = uniq(allYears)
      return years.sort().reverse()
    }
    return []
  }

  mostRecentYear = () => {
    const years = this.yearsOfEvents()
    return years[0]
  }

  eventYearsComponent = activeYear => {
    const { store, onClickYear } = this.props
    let { monthlyEvents } = store.monthlyEvents
    const years = this.yearsOfEvents()

    if (monthlyEvents.length > 0 && years.length > 0) {
      return years.map(year => {
        const className =
          year === activeYear ? 'year active' : 'year not-active'
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
            <MonthlyEventsOfYear year={year} />
          </Panel>
        )
      })
    }
    return null
  }

  render() {
    const { store } = this.props
    const { activeMonthlyEvent } = store.monthlyEvents
    let activeYear
    if (has(activeMonthlyEvent, '_id')) {
      activeYear = getYearFromEventId(activeMonthlyEvent._id)
    } else {
      activeYear = this.props.activeYear
        ? this.props.activeYear
        : this.mostRecentYear()
    }

    return (
      <Container id="monthlyEvents">
        <h1>Events Archive</h1>
        <PanelGroup activeKey={activeYear} accordion>
          {this.eventYearsComponent(activeYear)}
        </PanelGroup>
      </Container>
    )
  }
}

export default enhance(MonthlyEvents)
