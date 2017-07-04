// @flow
import app from 'ampersand-app'
import map from 'lodash/map'
import min from 'lodash/min'
import max from 'lodash/max'
import sortEvents from './sortEvents'

export default (
  store: Object,
  years: Array<number>,
): Promise<Array<Object>> => {
  const options = {
    include_docs: true,
    startkey: `events_${min(years)}`,
    endkey: `events_${max(years)}_\uffff`,
  }
  return app.db
    .allDocs(options)
    .then(result => {
      let events = map(result.rows, 'doc')
      events = sortEvents(events)
      return events
    })
    .catch(error => store.error.showError('Error fetching events:', error))
}
