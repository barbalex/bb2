// source: https://stackoverflow.com/a/3745677/712005
function hex2a(hexx) {
  if (!hexx) return null
  var hex = hexx.toString() //force conversion
  var str = ''
  for (var i = 0; i < hex.length; i += 2)
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16))
  return str
}

export default hex2a
