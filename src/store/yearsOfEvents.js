//
import { action } from 'mobx'
import moment from 'moment'

import getYearsOfEvents from '../modules/getYearsOfEvents'

export default store => ({
  yearsOfEvents: [parseInt(moment().format('YYYY'), 0)],

  getYearsOfEvents: action('getYearsOfEvents', async () => {
    let years
    try {
      years = await getYearsOfEvents(store)
    } catch (error) {
      console.log('yearsOfEventsStore, error getting years of events', error)
    }
    store.yearsOfEvents.yearsOfEvents = years
  }),

  activeEventYears: [parseInt(moment().format('YYYY'), 0)],

  setActiveEventYears: action('setActiveEventYears', activeEventYears => {
    store.yearsOfEvents.activeEventYears = activeEventYears
  }),
})
