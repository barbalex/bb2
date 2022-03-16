import React from 'react'
import { Router } from '@reach/router'

import MonthlyEvents from '../components/MonthlyEvents'

const MonthlyEventsPage = () => (
  <Router>
    <MonthlyEvents path="/monthly-events/:year/:month" />
    <MonthlyEvents path="/monthly-events" year={0} month={0} />
  </Router>
)

export default MonthlyEventsPage
