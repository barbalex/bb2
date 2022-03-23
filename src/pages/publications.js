import React from 'react'
import { Router } from '@reach/router'

import Publications from '../components/Publications'

const PublicationsPage = () => (
  <Router>
    <Publications path="/publications/:category/:id" />
    <Publications path="/publications/:category" />
    <Publications path="/publications" />
  </Router>
)

export default PublicationsPage
