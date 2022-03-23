const graphQlUri = () => {
  if (typeof window === 'undefined') {
    return 'https://api.blue-borders.ch/v1/graphql'
  }
  let hostnameWithoutWww = window.location.hostname.replace('www.', '')
  const isLocalhost = hostnameWithoutWww === 'localhost'

  return isLocalhost
    ? 'http://localhost:8080/v1/graphql'
    : `https://api.${hostnameWithoutWww}/v1/graphql`
}

export default graphQlUri
