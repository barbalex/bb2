import React from 'react'
import { Router } from '@reach/router'

import Actors from '../components/Actors'

const ActorsPage = ({ location }) => {
  console.log('actors page, location:', location)
  return (
    <Router>
      <Actors path="/actors/:category" />
      <Actors path="/actors" />
    </Router>
  )
}

export default ActorsPage
