// in development should return local path
import isDev from 'isdev'

/*const url = isDev
  ? `http://localhost:5984/bb`
  : //: `https://api.${window.location.hostname}/bb`
    `${window.location.hostname}/api/bb`

export default () => url*/

export default () => {
  if (typeof window === `undefined`) return 'localhost:5984/bb'
  const hostname = isDev
    ? `${window.location.hostname}:5984/bb`
    : `api.${window.location.hostname}/bb`
  //: `${window.location.hostname}/api/bb`

  return `${window.location.protocol}//${hostname}`
}
