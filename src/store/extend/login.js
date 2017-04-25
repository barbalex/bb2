// @flow
import { extendObservable, action } from 'mobx'

export default (store: Object): void => {
  extendObservable(store.login, {
    getLogin: action('getLogin', (): ?string => window.localStorage.email),

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
        store.login.trigger(email)
        window.localStorage.email = email
      }
    }),

    logout: action('logout', () => delete window.localStorage.email),
  })
}
