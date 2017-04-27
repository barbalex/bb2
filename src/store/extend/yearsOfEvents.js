// @flow
import { extendObservable, action } from 'mobx'
import moment from 'moment'

import getYearsOfEvents from '../../modules/getYearsOfEvents.js'

export default (store: Object): void => {
  extendObservable(store.yearsOfEvents, {
    yearsOfEvents: [parseInt(moment().format('YYYY'), 0)],

    getYearsOfEvents: action('getYearsOfEvents', (): void => {
      getYearsOfEvents(store)
        .then(years => (store.yearsOfEvents.yearsOfEvents = years))
        .catch(error =>
          console.log(
            'yearsOfEventsStore, error getting years of events',
            error,
          ),
        )
    }),

    activeEventYears: [parseInt(moment().format('YYYY'), 0)],

    setActiveEventYears: action('setActiveEventYears', activeEventYears => {
      store.yearsOfEvents.activeEventYears = activeEventYears
    }),
  })
}
