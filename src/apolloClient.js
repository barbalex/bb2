import {
  ApolloClient,
  InMemoryCache,
  defaultDataIdFromObject,
} from '@apollo/client'
import { BatchHttpLink } from '@apollo/client/link/batch-http'
import { setContext } from '@apollo/client/link/context'
import { ApolloLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import jwtDecode from 'jwt-decode'
import uniqBy from 'lodash/uniqBy'

import graphQlUri from './modules/graphQlUri'
import existsPermissionsError from './modules/existsPermissionError'
import getAuthToken from './modules/getAuthToken'

const noToken =
  'eyJhbGciOiJIUzUxMiIsImtpZCI6IjRlMjdmNWIwNjllYWQ4ZjliZWYxZDE0Y2M2Mjc5YmRmYWYzNGM1MWIiLCJ0eXAiOiJKV1QifQ.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6Im5vbmUiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbIm5vbmUiXSwieC1oYXN1cmEtdXNlci1pZCI6ImFhYWFhYWFhLWFhYWEtMTFlYS1hYWFhLWFhYWFhYWFhYWFhYSJ9LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdmVybWVocnVuZy1hYWFhYSIsImF1ZCI6InZlcm1laHJ1bmctZjQ4YzQiLCJhdXRoX3RpbWUiOjE1OTE5Njg3MzQsInVzZXJfaWQiOiJYUnV6eHAxWDJ3YWFhYWF5ek9hV1Y2emdhYWFhIiwic3ViIjoiWFJ1enhwMVhhYWFhb3l6T2FXVjZ6Z0NDTDIiLCJpYXQiOjE1OTE5NjkzNDksImV4cCI6MTU5MTk3Mjk0OSwiZW1haWwiOiJ0ZXN0QHRlc3QuY2giLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidGVzdEB0ZXN0LmNoIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0._BWw-QO7K_oTr72pHZBl4OlXox3_x59IGEnllj3PwaFO8fylhQX7YZyaNev7iqeiyzx2DRZyAQyFhffNjEWyog'
// to be used in apollo link
const getToken = () => {
  if (typeof window === 'undefined') return noToken
  return window.localStorage.getItem('token') ?? noToken
}

const Client = ({ store }) => {
  const { showError } = store.error
  // TODO: use new functionality
  // https://www.apollographql.com/docs/react/migrating/apollo-client-3-migration/?mc_cid=e593721cc7&mc_eid=c8e91f2f0a#apollo-link-and-apollo-link-http
  const authLink = setContext((_, { headers }) => {
    const token = getToken()
    if (token) {
      const tokenDecoded = jwtDecode(token)
      // for unknown reason, date.now returns three more after comma
      // numbers than the exp date contains
      const tokenIsValid = tokenDecoded.exp > Date.now() / 1000
      if (tokenIsValid) {
        return {
          headers: {
            ...headers,
            authorization: `Bearer ${token}`,
          },
        }
      }
    } else {
      getAuthToken({ store })
    }
    return { headers }
  })

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      const graphQLErrorsToShow = graphQLErrors.filter(({ message, path }) => {
        if (
          path &&
          path.includes('historize') &&
          message &&
          message.includes('Unique-Constraint')
        ) {
          return false
        }
        return true
      })
      const uniqueQraphQLErrors = uniqBy(graphQLErrorsToShow, 'message')
      if (uniqueQraphQLErrors) {
        /**
         * TODO
         * Test this at night
         * make sure message is what is wanted by logging it out
         */
        if (existsPermissionsError(uniqueQraphQLErrors)) {
          // DO NOT notify
          // The User component will open and let user log in
          return
          // DO NOT logout here:
          // logout reloads the window
          // this must be controlled by the User component inside Daten
          // otherwise UI keeps reloading forever!
        }
        uniqueQraphQLErrors.map(({ message, locations, path }) => {
          console.log(
            `apollo client GraphQL error: Message: ${message}, Location: ${JSON.stringify(
              locations,
            )}, Path: ${path}`,
          )
          return showError(
            `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
              locations,
            )}, Path: ${path}`,
          )
        })
      }
    }
    if (networkError) {
      console.log(`apollo client Network error:`, networkError)
      showError(`apollo client Network error: ${networkError}`)
    }
  })

  const cache = new InMemoryCache({
    dataIdFromObject: (object) => {
      // BEWARE: the following functions/types use existing id's as their id
      // thus once loaded apollo will replace the existing models in the cache with their data
      // this will cause hard to solve issues
      // so need to force default data id that combines __typename with id
      // list all query names that do not return pure table rows
      if (['QueryNameThatDoesNotReturnTableRow'].includes(object.__typename)) {
        return defaultDataIdFromObject(object)
      }
      if (object.id && isNaN(object.id)) {
        return object.id
      }
      return defaultDataIdFromObject(object)
    },
  })

  const batchHttpLink = new BatchHttpLink({ uri: graphQlUri() })
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, authLink, batchHttpLink]),
    cache,
    defaultOptions: { fetchPolicy: 'cache-and-network' },
  })
  // make client available in store
  store.setClient(client)
  return client
}

export default Client
