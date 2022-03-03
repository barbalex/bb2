import axios from 'redaxios'

const getAuthToken = async ({ store }) => {
  let res
  try {
    res = await axios.get(
      `https://auth.artenliste.ch/add-hasura-claims/${
        store.login?.user?.uid ?? 'aaaaaaaa-aaaa-11ea-aaaa-aaaaaaaaaaaa'
      }`,
    )
  } catch (error) {
    console.log('error from getting claims from auth.blue-borders.ch:', error)
  }
  //console.log('getAuthToken, res:', res)
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
    window.localStorage.setItem('token', token)
  }
  return true
}

export default getAuthToken
