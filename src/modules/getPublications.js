// @flow
import app from 'ampersand-app'
import map from 'lodash/map'
import sortPublications from './sortPublications.js'

const options = {
  include_docs: true,
  startkey: 'publications_',
  endkey: 'publications_\uffff',
}

export default (store: Object): Promise<Array<Object>> =>
  app.db
    .allDocs(options)
    .then(result => {
      let publications = map(result.rows, 'doc')
      publications = sortPublications(publications)
      return publications
    })
    .catch(error =>
      store.error.showError('Error fetching publications:', error),
    )
