// @flow
import { extendObservable, action } from 'mobx'
import app from 'ampersand-app'

export default (store: Object): void => {
  extendObservable(store.login, {
    getLogin: action('getLogin', (): ?string => window.localStorage.email),

    email: window.localStorage.email,

    login: action('login', (email: string): void => {
      // change email only if it was passed
      const changeEmail = email !== undefined
      let lsEmail = window.localStorage.email
      if ((changeEmail && lsEmail !== email) || !email) {
        if (changeEmail) {
          lsEmail = email
        } else {
          email = lsEmail
        }
        window.localStorage.email = email
        store.login.email = email
        app.router.navigate('/home')
      }
    }),

    logout: action('logout', () => {
      delete window.localStorage.email
      store.login.email = ''
    }),
  })
}
