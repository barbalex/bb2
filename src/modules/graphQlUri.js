const graphQlUri = () => {
  if (typeof window === 'undefined') {
    return 'https://api.artenliste.ch/graphql'
  }
  return 'https://api.artenliste.ch/graphql'
  // const hostnameWithoutWww = window.location.hostname.replace('www.', '')
  // const isLocalhost = hostnameWithoutWww === 'localhost'

  // return isLocalhost
  //   ? 'http://localhost:5000/graphql'
  //   : 'https://api.artenliste.ch/graphql'
}

export default graphQlUri
