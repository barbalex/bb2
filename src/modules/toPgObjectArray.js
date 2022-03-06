/* eslint-disable no-useless-escape */
const toPgArray = (array) =>
  array.length
    ? array.map((a) => ({ url: `\"${a.url}\"`, label: `\"${a.label}\"` }))
    : null

export default toPgArray
