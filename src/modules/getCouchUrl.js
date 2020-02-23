// in development should return local path
import isDev from 'isdev'

/*const url = isDev
  ? `http://localhost:5984/bb`
  : //: `https://api.${window.location.hostname}/bb`
    `${window.location.hostname}/api/bb`

export default () => url*/

const hostname = isDev
  ? `${window.location.hostname}:5984/bb`
  : `${window.location.hostname}/api/bb`

export default (): string => `${window.location.protocol}//${hostname}`
