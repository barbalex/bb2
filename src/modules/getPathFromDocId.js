//      
export default (id        )         => {
  let path = id
  if (path.startsWith('pages_')) path = path.slice(6)
  path = path.replace(/_/g, '/')
  return path
}
