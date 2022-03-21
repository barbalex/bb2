//
import { observable, extendObservable } from 'mobx'

import login from './login'
import store from './store'

function Store() {
  extendObservable(this, store(this))
  this.login = observable(login(this))
}

const MyStore = new Store()

export default MyStore
