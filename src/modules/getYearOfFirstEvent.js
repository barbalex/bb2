import app from 'ampersand-app'
import getYearFromEventId from './getYearFromEventId'

const options = {
  include_docs: false,
  startkey: 'events_0000',
  endkey: 'events_9999_\uffff',
  descending: false,
  limit: 1,
}

export default async (store) => {
  let result
  try {
    result = await app.db?.allDocs(options)
  } catch (error) {
    console.log('getYearOfFirstEvent, error:', error)
    store.error.showError('Error fetching events:', error)
    return new Date().getFullYear()
  }
  const id = result?.rows?.[0]?.id
  const year = id ? getYearFromEventId(id) : new Date().getFullYear()
  return year
}
