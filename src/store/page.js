//
import { action } from 'mobx'
import app from 'ampersand-app'

const page = (store) => ({
  activePage: {},
  editing: false,
  showMeta: false,
})

export default page
