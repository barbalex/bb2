// @flow
import app from 'ampersand-app'
import map from 'lodash/map'
import sortActors from './sortActors.js'

const options = {
  include_docs: true,
  startkey: 'actors_',
  endkey: 'actors_\uffff',
}

export default (store: Object): Promise<Array<Object>> =>
  app.db
    .allDocs(options)
    .then(result => {
      let actors = map(result.rows, 'doc')
      actors = sortActors(actors)
      return actors
    })
    .catch(error => store.error.showError('Error fetching actors:', error))
