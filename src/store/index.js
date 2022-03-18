//
import { observable, extendObservable } from 'mobx'

import monthlyEvents from './monthlyEvents'
import publications from './publications'
import login from './login'
import error from './error'
import store from './store'

function Store() {
  extendObservable(this, store(this))
  this.monthlyEvents = observable(monthlyEvents(this))
  this.publications = observable(publications(this))
  this.login = observable(login(this))
  this.error = observable(error(this))
}

const MyStore = new Store()

export default MyStore
