/**
 * Gets an array of query results passed
 * returns true if any of them returns permission denied
 */
const existsPermissionError = (errors) => {
  if (!errors) {
    return false
  }
  if (!errors.some) {
    return false
  }
  const exists = errors.some(
    (error) =>
      error.message.includes('permission denied') ||
      error.message.includes('keine Berechtigung'),
  )
  return exists
}

export default existsPermissionError
