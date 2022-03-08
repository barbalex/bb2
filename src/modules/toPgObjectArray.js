/* eslint-disable no-useless-escape */
import toPgArray from './toPgArray'
const toPgObjectArray = (array) => {
  return array.length
    ? //? array.map((a) => ({ url: `\"${a.url}\"`, label: `\"${a.label}\"` }))
      toPgArray(array.map((a) => JSON.stringify(a)))
    : //  ? array.map((a) => ({ url: `${a.url}`, label: `${a.label}` }))
      null
}

export default toPgObjectArray
