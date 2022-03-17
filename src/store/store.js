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
})
