// in development should return local path
import isDev from 'isdev'

const url = isDev
  ? `http://localhost:5984/bb`
  : //: `https://api.${window.location.hostname}/bb`
    `${window.location.hostname}/api/bb`

export default () => url
//export default () => `${window.location.protocol}//${url}`
