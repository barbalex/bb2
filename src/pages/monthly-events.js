import React from 'react'
import { Router } from '@reach/router'

import MonthlyEvents from '../components/MonthlyEvents'

const MonthlyEventsPage = () => (
  <Router>
    <MonthlyEvents path="/monthly-events/:year/:month" />
    <MonthlyEvents path="/monthly-events" />
  </Router>
)

export default MonthlyEventsPage
