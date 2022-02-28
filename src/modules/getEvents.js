import app from 'ampersand-app'
import map from 'lodash/map'
import min from 'lodash/min'
import max from 'lodash/max'
import sortEvents from './sortEvents'

export default async (store, years) => {
  const options = {
    include_docs: true,
    startkey: `events_${min(years)}`,
    endkey: `events_${max(years)}_\uffff`,
  }
  let result
  try {
    // console.log('getEvents, db:', { db: app.db, options })
    result = await app.db?.allDocs(options)
  } catch (error) {
    console.log('getEvents, error:', error)
    store.error.showError('Error fetching events:', error)
    return []
  }
  // console.log('getEvents, result:', result)
  const events = map(result?.rows ?? [], 'doc')
  return sortEvents(events)
}
