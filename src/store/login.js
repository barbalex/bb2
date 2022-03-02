//
/*
 * contains email of logged in user
 * well, it is saved in localStorage as window.localStorage.email
 * app.js sets default email (null) if not exists on app start
 */
import { action } from 'mobx'
import { navigate } from '@reach/router'

export default (store) => {
  if (typeof window === `undefined`) return {}

  return {
    uid: null,
    firebaseAuth: null,
    getUid: action('getUid', () => window.localStorage.uid),

    email: window.localStorage.email,

    setFirebaseAuth: action('setFirebaseAuth', (auth) => {
      if (auth) {
        store.login.firebaseAuth = auth
      }
    }),

    setUid: action('login', (uid) => {
      if (uid) {
        store.login.uid = uid
        window.localStorage.uid = uid
        navigate('/events')
      }
    }),

    logout: action('logout', () => {
      delete window.localStorage.uid
      store.login.uid = null
    }),
  }
}
