// @flow
import { observable, extendObservable } from "mobx"

import page from './page'
import monthlyEvents from './monthlyEvents'
import yearsOfEvents from './yearsOfEvents'
import events from './events'
import commentaries from './commentaries'
import publications from './publications'
import actors from './actors'
import login from './login'
import error from './error'
import store from './store'

function Store(): void {
  extendObservable(this, store(this))
  this.page = observable(page(this))
  this.monthlyEvents = observable(monthlyEvents(this))
  this.yearsOfEvents = observable(yearsOfEvents(this))
  this.events = observable(events(this))
  this.commentaries = observable(commentaries(this))
  this.publications = observable(publications(this))
  this.actors = observable(actors(this))
  /*
   * contains email of logged in user
   * well, it is saved in localStorage as window.localStorage.email
   * app.js sets default email (null) if not exists on app start
   */
  this.login = observable(login(this))
  /*
   * receives an error object with two keys: title, msg
   * keeps error objects in the array errors
   * deletes errors after a defined time - the time while the error will be shown to the user
   *
   * if a view wants to inform of an error it
   * calls action showError and passes the object
   *
   * the errorStore triggers, passing the errors array
   * ...then triggers again after removing the last error some time later
   *
   * Test: app.store.error.showError({title: 'testTitle', msg: 'testMessage'})
   * template: app.store.error.showError({title: 'title', msg: error})
   */
  this.error = observable(error(this))
}

const MyStore = new Store()

export default MyStore
