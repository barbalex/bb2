//
import { action } from 'mobx'
import moment from 'moment'

export default (store) => ({
  yearsOfEvents: [parseInt(moment().format('YYYY'), 0)],
  grouped: true, // describes if some years are grouped in one button
  activeYear: parseInt(moment().format('YYYY'), 0),

  setActiveYear: action('setActiveYear', (activeYear) => {
    store.yearsOfEvents.activeYear = activeYear
  }),

  setGrouped: action('setGrouped', (val) => {
    store.yearsOfEvents.grouped = val
  }),
})
