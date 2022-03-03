//
import { action } from 'mobx'

export default (store) => ({
  editing: false,
  client: null,
  toggleEditing: action('toggleEditing', () => {
    store.editing = !store.editing
  }),
  setClient: action('setClient', (client) => {
    store.client = client
  }),
})
