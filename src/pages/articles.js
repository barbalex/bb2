import React from 'react'
import { Router } from '@reach/router'

import Articles from '../components/Articles'

const ArticlesPage = () => {
  console.log('articles')
  return (
    <Router>
      <Articles path="/articles/:year/:month/:day/:title" />
      <Articles path="/articles" />
    </Router>
  )
}

export default ArticlesPage
