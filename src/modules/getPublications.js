import app from 'ampersand-app'
import map from 'lodash/map'
import sortPublications from './sortPublications'

const options = {
  include_docs: true,
  startkey: 'publications_',
  endkey: 'publications_\uffff',
}

export default async store => {
  let result
  try {
    result = await app.db.allDocs(options)
  } catch (error) {
    store.error.showError('Error fetching publications:', error)
    return []
  }
  const publications = map(result.rows, 'doc')
  return sortPublications(publications)
}
