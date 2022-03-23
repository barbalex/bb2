// source: https://stackoverflow.com/a/18478624/712005
function a2hex(str) {
  if (!str) return null
  var arr = []
  for (var i = 0, l = str.length; i < l; i++) {
    var hex = Number(str.charCodeAt(i)).toString(16)
    arr.push(hex)
  }
  return arr.join('')
}

export default a2hex
