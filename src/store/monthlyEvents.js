//
import { action } from 'mobx'
import app from 'ampersand-app'
import { navigate } from '@reach/router'

import getMonthlyEvents from '../modules/getMonthlyEvents'
import getPathFromDocId from '../modules/getPathFromDocId'
import sortMonthlyEvents from '../modules/sortMonthlyEvents'

export default store => ({
  monthlyEvents: [],

  // cache the id, not the entire doc
  // advantage: on first load monthlyEvents is empty so no activeMonthlyEvent can be gotten
  // but if id is used, this can be cached
  activeMonthlyEventId: null,

  get activeMonthlyEvent() {
    return store.monthlyEvents.monthlyEvents.find(
      monthlyEvent =>
        monthlyEvent._id === store.monthlyEvents.activeMonthlyEventId,
    )
  },

  getMonthlyEventsCallback: null,

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
    if (store.monthlyEvents.getMonthlyEventsCallback) {
      store.monthlyEvents.getMonthlyEventsCallback()
      store.monthlyEvents.getMonthlyEventsCallback = null
    }
  }),
  getMonthlyEvent: action('getMonthlyEvent', id => {
    if (!id) {
      navigate('/monthly-events')
      store.monthlyEvents.activeMonthlyEventId = null
    } else {
      store.monthlyEvents.activeMonthlyEventId = id
      const path = getPathFromDocId(id)
      navigate(`/${path}`)
    }
  }),
  updateMonthlyEventsInCache: action(
    'updateMonthlyEventsInCache',
    monthlyEvent => {
      // first update the monthlyEvent in this.monthlyEvents
      store.monthlyEvents.monthlyEvents = store.monthlyEvents.monthlyEvents.filter(
        me => me._id !== monthlyEvent._id,
      )
      store.monthlyEvents.monthlyEvents.push(monthlyEvent)
      store.monthlyEvents.monthlyEvents = sortMonthlyEvents(
        store.monthlyEvents.monthlyEvents,
      )
    },
  ),
  revertCache: action(
    'revertCache',
    (oldMonthlyEvents, oldActiveMonthlyEventId) => {
      store.monthlyEvents.monthlyEvents = oldMonthlyEvents
      store.monthlyEvents.activeMonthlyEventId = oldActiveMonthlyEventId
    },
  ),
  saveMonthlyEvent: action('saveMonthlyEvent', async monthlyEvent => {
    // keep old cache in case of error
    const oldMonthlyEvents = store.monthlyEvents.monthlyEvents
    const oldActiveMonthlyEventId = store.monthlyEvents.activeMonthlyEventId
    // optimistically update in cache
    store.monthlyEvents.updateMonthlyEventsInCache(monthlyEvent)
    let resp
    try {
      resp = await app.db.put(monthlyEvent)
    } catch (error) {
      store.monthlyEvents.revertCache(oldMonthlyEvents, oldActiveMonthlyEventId)
      store.error.showError({
        title: 'Error saving monthly event:',
        msg: error,
      })
    }
    monthlyEvent._rev = resp.rev
    // definitely update in cache
    store.monthlyEvents.updateMonthlyEventsInCache(monthlyEvent)
  }),
})
