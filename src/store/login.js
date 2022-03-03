//
/*
 * contains email of logged in user
 * well, it is saved in localStorage as window.localStorage.email
 * app.js sets default email (null) if not exists on app start
 */
import { action } from 'mobx'
import { navigate } from '@reach/router'

import { signOut } from 'firebase/auth'

export default (store) => {
  if (typeof window === `undefined`) return {}

  return {
    user: null,
    firebaseAuth: null,
    getUid: action('getUid', () => store.user?.uid),

    email: window.localStorage.email,

    setFirebaseAuth: action('setFirebaseAuth', (auth) => {
      if (auth) {
        store.login.firebaseAuth = auth
      }
    }),

    setUser: action('login', (user) => {
      if (user) {
        store.login.user = user
        navigate('/events')
      }
    }),

    logout: action('logout', () => {
      store.login?.firebaseAuth && signOut(store.login.firebaseAuth)
      store.login.user = null
    }),
  }
}
