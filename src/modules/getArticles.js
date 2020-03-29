import app from 'ampersand-app'
import map from 'lodash/map'
import sortArticles from './sortArticles'

const options = {
  include_docs: true,
  startkey: 'commentaries_',
  endkey: 'commentaries_\uffff',
}

export default async store => {
  let result
  try {
    result = await app.db.allDocs(options)
  } catch (error) {
    store.error.showError('Error fetching articles:', error)
    return []
  }
  const articles = map(result.rows, 'doc')
  return sortArticles(articles)
}
