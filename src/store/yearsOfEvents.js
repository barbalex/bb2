//
import { action } from 'mobx'
import moment from 'moment'

import getYearsOfEvents from '../modules/getYearsOfEvents'

export default (store) => ({
  yearsOfEvents: [parseInt(moment().format('YYYY'), 0)],
  grouped: true, // describes if some years are grouped in one button
  activeYear: parseInt(moment().format('YYYY'), 0),

  setActiveYear: action('setActiveYear', (activeYear) => {
    store.yearsOfEvents.activeYear = activeYear
  }),

  getYearsOfEvents: action('getYearsOfEvents', async () => {
    let years
    try {
      years = await getYearsOfEvents(store)
    } catch (error) {
      console.log('yearsOfEventsStore, error getting years of events', error)
    }
    store.yearsOfEvents.yearsOfEvents = years
    return
  }),

  setGrouped: action('setGrouped', (val) => {
    store.yearsOfEvents.grouped = val
  }),
})
