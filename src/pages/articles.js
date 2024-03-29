import React from 'react'
import { Router } from '@reach/router'

import Articles from '../components/Articles'

const ArticlesPage = () => (
  <Router>
    <Articles path="/articles/:id" />
    <Articles path="/articles" />
  </Router>
)

export default ArticlesPage
