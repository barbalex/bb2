// @flow
import app from 'ampersand-app'
import getYearFromEventId from './getYearFromEventId.js'

const options = {
  include_docs: false,
  startkey: 'events_0000',
  endkey: 'events_9999_\uffff',
  descending: false,
  limit: 1,
}

export default (store: Object): Promise<number> =>
  app.db
    .allDocs(options)
    .then(result => {
      const id = result.rows[0].id
      const year = getYearFromEventId(id)
      return year
    })
    .catch(error => store.error.showError('Error fetching events:', error))
