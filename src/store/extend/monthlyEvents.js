// @flow
import { extendObservable, action } from 'mobx'
import app from 'ampersand-app'

import getMonthlyEvents from '../../modules/getMonthlyEvents.js'
import getPathFromDoc from '../../modules/getPathFromDoc.js'
import sortMonthlyEvents from '../../modules/sortMonthlyEvents.js'

export default (store: Object): void => {
  extendObservable(store.monthlyEvents, {
    monthlyEvents: [],

    // cache the id, not the entire doc
    // advantage: on first load monthlyEvents is empty so no activeMonthlyEvent can be gotten
    // but if id is used, this can be cached
    activeMonthlyEventId: null,

    activeMonthlyEvent: action('activeMonthlyEvent', () =>
      store.monthlyEvents.monthlyEvents.find(
        monthlyEvent =>
          monthlyEvent._id === store.monthlyEvents.activeMonthlyEventId
      )
    ),

    getMonthlyEventsCallback: null,

    getMonthlyEvents: action('getMonthlyEvents', () =>
      getMonthlyEvents()
        .then(monthlyEvents => {
          store.monthlyEvents.monthlyEvents = monthlyEvents
          if (store.monthlyEvents.getMonthlyEventsCallback) {
            store.monthlyEvents.getMonthlyEventsCallback()
            store.monthlyEvents.getMonthlyEventsCallback = null
          }
        })
        .catch(error =>
          app.Actions.showError({
            msg: error
          })
        )
    ),
    getMonthlyEvent: action('getMonthlyEvent', id => {
      if (!id) {
        app.router.navigate('/monthlyEvents')
        store.monthlyEvents.activeMonthlyEventId = null
      } else {
        if (store.monthlyEvents.monthlyEvents.length === 0) {
          // on first load monthlyEvents is empty
          // need to wait until onGetMonthlyEvents fires
          store.monthlyEvents.getMonthlyEventsCallback = () => {
            const monthlyEvent = store.monthlyEvents.monthlyEvents.find(
              me => me._id === id
            )
            const path = getPathFromDoc(monthlyEvent)
            app.router.navigate(`/${path}`)
            store.monthlyEvents.activeMonthlyEventId = id
          }
        } else {
          const monthlyEvent = store.monthlyEvents.monthlyEvents.find(
            me => me._id === id
          )
          const path = getPathFromDoc(monthlyEvent)
          app.router.navigate(`/${path}`)
          store.monthlyEvents.activeMonthlyEventId = id
        }
      }
    }),
    updateMonthlyEventsInCache: action(
      'updateMonthlyEventsInCache',
      monthlyEvent => {
        // first update the monthlyEvent in this.monthlyEvents
        store.monthlyEvents.monthlyEvents = store.monthlyEvents.monthlyEvents.filter(
          me => me._id !== monthlyEvent._id
        )
        store.monthlyEvents.monthlyEvents.push(monthlyEvent)
        store.monthlyEvents.monthlyEvents = sortMonthlyEvents(
          store.monthlyEvents.monthlyEvents
        )
      }
    ),
    revertCache: action(
      'revertCache',
      (oldMonthlyEvents, oldActiveMonthlyEventId) => {
        store.monthlyEvents.monthlyEvents = oldMonthlyEvents
        store.monthlyEvents.activeMonthlyEventId = oldActiveMonthlyEventId
      }
    ),
    saveMonthlyEvent: action('saveMonthlyEvent', monthlyEvent => {
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
            oldActiveMonthlyEventId
          )
          app.Actions.showError({
            title: 'Error saving monthly event:',
            msg: error
          })
        })
    }),
    removeMonthlyEventFromCache: action(
      'removeMonthlyEventFromCache',
      monthlyEvent => {
        // first update the monthlyEvent in store.monthlyEvents.monthlyEvents
        store.monthlyEvents.monthlyEvents = store.monthlyEvents.monthlyEvents.filter(
          thisMonthlyEvent => thisMonthlyEvent._id !== monthlyEvent._id
        )
        store.monthlyEvents.monthlyEvents = sortMonthlyEvents(
          store.monthlyEvents.monthlyEvents
        )
        // now update store.monthlyEvents.activeMonthlyEventId if it is the active monthlyEvent's _id
        const isActiveMonthlyEvent =
          store.monthlyEvents.activeMonthlyEventId === monthlyEvent._id
        if (isActiveMonthlyEvent)
          store.monthlyEvents.activeMonthlyEventId = null
      }
    ),
    removeMonthlyEvent: action('removeMonthlyEvent', monthlyEvent => {
      // keep old cache in case of error
      const oldMonthlyEvents = store.monthlyEvents.monthlyEvents
      const oldActiveMonthlyEventId = store.monthlyEvents.activeMonthlyEventId
      // optimistically remove monthlyEvent from cache
      store.monthlyEvents.removeMonthlyEventFromCache(monthlyEvent)
      app.db.remove(monthlyEvent).catch(error => {
        // oops. Revert optimistic removal
        store.monthlyEvents.revertCache(
          oldMonthlyEvents,
          oldActiveMonthlyEventId
        )
        app.Actions.showError({
          title: 'Error removing monthly event:',
          msg: error
        })
      })
    }),
    toggleDraftOfMonthlyEvent: action(
      'toggleDraftOfMonthlyEvent',
      monthlyEvent => {
        if (monthlyEvent.draft === true) {
          delete monthlyEvent.draft
        } else {
          monthlyEvent.draft = true
        }
        store.monthlyEvents.onSaveMonthlyEvent(monthlyEvent)
      }
    )
  })
}
