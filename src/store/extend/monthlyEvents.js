// @flow
import { extendObservable, action } from 'mobx'
import app from 'ampersand-app'

import getMonthlyEvents from '../../modules/getMonthlyEvents.js'
import getPathFromDocId from '../../modules/getPathFromDocId'
import sortMonthlyEvents from '../../modules/sortMonthlyEvents.js'

export default (store: Object): void => {
  extendObservable(store.monthlyEvents, {
    monthlyEvents: [],

    // cache the id, not the entire doc
    // advantage: on first load monthlyEvents is empty so no activeMonthlyEvent can be gotten
    // but if id is used, this can be cached
    activeMonthlyEventId: null,

    activeMonthlyEvent: action('activeMonthlyEvent', (): ?Object =>
      store.monthlyEvents.monthlyEvents.find(
        monthlyEvent =>
          monthlyEvent._id === store.monthlyEvents.activeMonthlyEventId,
      ),
    ),

    getMonthlyEventsCallback: null,

    getMonthlyEvents: action('getMonthlyEvents', (): void => {
      getMonthlyEvents(store)
        .then(monthlyEvents => {
          store.monthlyEvents.monthlyEvents = monthlyEvents
          if (store.monthlyEvents.getMonthlyEventsCallback) {
            store.monthlyEvents.getMonthlyEventsCallback()
            store.monthlyEvents.getMonthlyEventsCallback = null
          }
        })
        .catch(error =>
          store.error.showError({
            msg: error,
          }),
        )
    }),
    getMonthlyEvent: action('getMonthlyEvent', (id: ?string): void => {
      if (!id) {
        app.router.navigate('/monthlyEvents')
        store.monthlyEvents.activeMonthlyEventId = null
      } else {
        store.monthlyEvents.activeMonthlyEventId = id
        const path = getPathFromDocId(id)
        app.router.navigate(`/${path}`)
      }
    }),
    updateMonthlyEventsInCache: action(
      'updateMonthlyEventsInCache',
      (monthlyEvent: Object): void => {
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
      (
        oldMonthlyEvents: Array<Object>,
        oldActiveMonthlyEventId: string,
      ): void => {
        store.monthlyEvents.monthlyEvents = oldMonthlyEvents
        store.monthlyEvents.activeMonthlyEventId = oldActiveMonthlyEventId
      },
    ),
    saveMonthlyEvent: action(
      'saveMonthlyEvent',
      (monthlyEvent: Object): void => {
        // keep old cache in case of error
        const oldMonthlyEvents = store.monthlyEvents.monthlyEvents
        const oldActiveMonthlyEventId = store.monthlyEvents.activeMonthlyEventId
        // optimistically update in cache
        store.monthlyEvents.updateMonthlyEventsInCache(monthlyEvent)
        app.db
          .put(monthlyEvent)
          .then(resp => {
            monthlyEvent._rev = resp.rev
            // definitely update in cache
            store.monthlyEvents.updateMonthlyEventsInCache(monthlyEvent)
          })
          .catch(error => {
            store.monthlyEvents.revertCache(
              oldMonthlyEvents,
              oldActiveMonthlyEventId,
            )
            store.error.showError({
              title: 'Error saving monthly event:',
              msg: error,
            })
          })
      },
    ),
  })
}
