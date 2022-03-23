import React from 'react'
import { Router } from '@reach/router'

import Events from '../components/Events'

const EventsPage = () => (
  <Router>
    <Events path="/events/:id" />
    <Events path="/events" />
  </Router>
)

export default EventsPage
