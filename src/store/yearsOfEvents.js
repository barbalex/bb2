//
import { action } from 'mobx'

export default (store) => ({
  grouped: true, // describes if some years are grouped in one button
  activeYear: new Date().getFullYear(),

  setActiveYear: action('setActiveYear', (activeYear) => {
    store.yearsOfEvents.activeYear = activeYear
  }),

  setGrouped: action('setGrouped', (val) => {
    store.yearsOfEvents.grouped = val
  }),
})
