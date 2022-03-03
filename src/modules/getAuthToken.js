import axios from 'redaxios'
// import throttle from 'lodash/throttle'

const getAuthToken = async ({ store }) => {
  // if (!store.login?.user) {
  //   console.log('getAuthToken missing user')
  //   const regetMe = () => {
  //     console.log('getAuthToken recalling itself')
  //     getAuthToken({ store })
  //     if (typeof window !== 'undefined') {
  //       setTimeout(() => {
  //         console.log('getAuthToken reloading window')
  //         window.location.reload(true)
  //       }, 300)
  //     }
  //   }
  //   // need to throttle to prevent cycle
  //   //throttle(regetMe, 5000, { leading: true })
  //   setTimeout(() => throttle(regetMe, 5000, { leading: true }), 300)
  //   return
  // }
  let res
  try {
    res = await axios.get(
      `https://auth.artenliste.ch/add-hasura-claims/${
        store.login?.user?.uid ?? 'aaaaaaaa-aaaa-11ea-aaaa-aaaaaaaaaaaa'
      }`,
    )
  } catch (error) {
    // TODO: catch no network error and return token from localStorage
    console.log('error from getting claims from auth.blue-borders.ch:', error)
  }
  console.log('getAuthToken, res:', res)
  if (res?.status === 200) {
    let token
    try {
      token = await store.login.user.getIdToken(true)
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
