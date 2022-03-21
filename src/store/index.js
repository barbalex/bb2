//
import { observable, extendObservable } from 'mobx'

import login from './login'
import error from './error'
import store from './store'

function Store() {
  extendObservable(this, store(this))
  this.login = observable(login(this))
  this.error = observable(error(this))
}

const MyStore = new Store()

export default MyStore
