// @flow
// in development should return local path
export default (): string =>
  `${window.location.protocol}//${window.location.hostname}:5984/bb`
