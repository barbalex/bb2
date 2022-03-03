const graphQlUri = () => {
  if (typeof window === 'undefined') {
    return 'https://api.artenliste.ch/v1/graphql'
  }
  const hostnameWithoutWww = window.location.hostname.replace('www.', '')
  const isLocalhost = hostnameWithoutWww === 'localhost'

  return isLocalhost
    ? 'http://localhost:8080/v1/graphql'
    : 'https://api.artenliste.ch/v1/graphql'
}

export default graphQlUri
