//
import { action } from 'mobx'

export default (store) => ({
  editing: false,
  toggleEditing: action('toggleEditing', () => {
    store.editing = !store.editing
  }),
  client: null,
  setClient: action('setClient', (client) => {
    store.client = client
  }),
  errors: [],
  showError: action('showError', (error) => {
    // const duration = 10000
    const duration = 100000000
    if (!error) {
      // user wants to remove error messages
      store.error.errors = []
    } else {
      if (error.msg && error.msg.message) {
        error.msg = error.msg.message
      }
      store.error.errors.unshift(error)
      setTimeout(() => {
        store.error.errors.pop()
      }, duration)
    }
  }),
})
