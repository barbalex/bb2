// @flow
import app from 'ampersand-app'
import map from 'lodash/map'
import sortMonthlyEvents from './sortMonthlyEvents.js'

const options = {
  include_docs: true,
  startkey: 'monthlyEvents_',
  endkey: 'monthlyEvents_\uffff',
}

export default (store: Object): Promise<Array<Object>> =>
  app.db
    .allDocs(options)
    .then(result => {
      let monthlyEvents = map(result.rows, 'doc')
      monthlyEvents = sortMonthlyEvents(monthlyEvents)
      return monthlyEvents
    })
    .catch(error =>
      store.error.showError('Error fetching monthly events:', error),
    )
