import axios from 'redaxios'
import throttle from 'lodash/throttle'

const getAuthToken = async ({ store }) => {
  const { setAuthorizing, user } = store
  if (!user?.uid) {
    console.log('getAuthToken missing user.uid')
    const regetMe = () => {
      console.log('getAuthToken recalling itself')
      getAuthToken({ store })
      if (typeof window !== 'undefined') {
        setTimeout(() => {
          console.log('getAuthToken reloading window')
          window.location.reload(true)
        }, 300)
      }
    }
    // need to throttle to prevent cycle
    //throttle(regetMe, 5000, { leading: true })
    setTimeout(() => throttle(regetMe, 5000, { leading: true }), 300)
    return
  }
  //console.log('getAuthToken, user.uid:', user.uid)
  /*if (authorizing) {
    console.log('getAuthToken returning because authorizing is true')
    return
  }*/
  setAuthorizing(true)
  let res
  try {
    res = await axios.get(
      `https://auth.blue-borders.ch/add-hasura-claims/${user.uid}`,
    )
  } catch (error) {
    // TODO: catch no network error and return token from localStorage
    console.log('error from getting claims from auth.blue-borders.ch:', error)
  }
  if (res?.status === 200) {
    let token
    try {
      token = await user.getIdToken(true)
    } catch (error) {
      console.log('error from calling getting id token:', error)
    }
    // set token to localStorage so authLink picks it up on next db call
    // see: https://www.apollographql.com/docs/react/networking/authentication/#header
    // see: https://github.com/apollographql/subscriptions-transport-ws/issues/171#issuecomment-348492358
    // see: https://github.com/apollographql/subscriptions-transport-ws/issues/171#issuecomment-406859244
    //console.log('getAuthToken setting new token:', token)
    window.localStorage.setItem('token', token)
  }
  return true
}

export default getAuthToken
