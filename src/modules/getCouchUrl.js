// in development should return local path
import isDev from 'isdev'

const getCouchUrl = () => {
  // return 'https://blue-borders.ch/bb'
  if (typeof window === `undefined`) return 'localhost:5984/bb'
  const hostname = isDev
    ? `${window.location.hostname}:5984/bb`
    : `${window.location.hostname}/bb`
  return `${window.location.protocol}//${hostname}`
}

export default getCouchUrl
