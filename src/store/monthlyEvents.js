//
import { action } from 'mobx'
import { navigate } from '@reach/router'

import getMonthlyEvents from '../modules/getMonthlyEvents'
import getPathFromDocId from '../modules/getPathFromDocId'

export default (store) => ({
  monthlyEvents: [],

  // cache the id, not the entire doc
  // advantage: on first load monthlyEvents is empty so no activeMonthlyEvent can be gotten
  // but if id is used, this can be cached
  activeMonthlyEventId: null,

  get activeMonthlyEvent() {
    return store.monthlyEvents.monthlyEvents.find(
      (monthlyEvent) =>
        monthlyEvent._id === store.monthlyEvents.activeMonthlyEventId,
    )
  },

  getMonthlyEvents: action('getMonthlyEvents', async () => {
    let monthlyEvents
    try {
      monthlyEvents = await getMonthlyEvents(store)
    } catch (error) {
      store.error.showError({
        msg: error,
      })
    }
    store.monthlyEvents.monthlyEvents = monthlyEvents
  }),
  getMonthlyEvent: action('getMonthlyEvent', (id) => {
    if (!id) {
      navigate('/monthly-events')
      store.monthlyEvents.activeMonthlyEventId = null
    } else {
      store.monthlyEvents.activeMonthlyEventId = id
      const path = getPathFromDocId(id)
      navigate(`/${path}`)
    }
  }),
})
