// in development should return local path
import isDev from 'isdev'

export default () => {
  if (typeof window === `undefined`) return 'localhost:5984/bb'
  const hostname = isDev
    ? `${window.location.hostname}:5984/bb`
    : `api.${window.location.hostname}/bb`

  return `${window.location.protocol}//${hostname}`
}
