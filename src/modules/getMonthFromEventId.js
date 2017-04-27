// @flow
import months from './months.js'

export default (id: string): string => {
  const idArray = id.split('_')
  const month = idArray[2]
  return months[month]
}
