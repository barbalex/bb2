import app from 'ampersand-app'
import map from 'lodash/map'
import sortMonthlyEvents from './sortMonthlyEvents'

const options = {
  include_docs: true,
  startkey: 'monthlyEvents_',
  endkey: 'monthlyEvents_\uffff',
}

export default async (store) => {
  let result
  try {
    result = await app.db?.allDocs(options)
  } catch (error) {
    store.error.showError('Error fetching monthly events:', error)
    return []
  }
  const monthlyEvents = map(result?.rows ?? [], 'doc')
  return sortMonthlyEvents(monthlyEvents)
}
