const d = (datePassed) => {
  let date = datePassed
    ? datePassed instanceof Date
      ? datePassed
      : 'throw'
    : new Date()

  if (date === 'throw') throw 'function expects empty input or date'

  return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10)
}

export default d
