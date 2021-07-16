import moment from 'moment'
import getYearOfFirstEvent from './getYearOfFirstEvent'

export default async (store) => {
  let oldestYear
  try {
    oldestYear = await getYearOfFirstEvent(store)
  } catch (error) {
    console.log('getYearsOfEvents, error getting year of first event:', error)
    return []
  }
  const thisYear = parseInt(moment().format('YYYY'), 0)
  // create array of years between this and oldest
  const years = []
  let year = thisYear
  while (year >= oldestYear) {
    years.push(year)
    year--
  }
  return years
}
