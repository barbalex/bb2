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
// import getAuthToken from './modules/getAuthToken'

const noToken =
  'eyJhbGciOiJIUzUxMiIsImtpZCI6ImIwNmExMTkxNThlOGIyODIxNzE0MThhNjdkZWE4Mzc0MGI1ZWU3N2UiLCJ0eXAiOiJKV1QifQ.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6ImJiX3VzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbImJiX3VzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6InZpc2l0b3IifSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2JsdWUtYm9yZGVycyIsImF1ZCI6ImJsdWUtYm9yZGVycyIsImF1dGhfdGltZSI6MTY0NzcyNjI5NSwidXNlcl9pZCI6InZpc2l0b3IiLCJzdWIiOiJVUGtaNVhMNHhHUDlJNFdOYTVMYVdOOUJFYjMyIiwiaWF0IjoxNjQ3NzI2Mjk2LCJleHAiOjE2NDc3Mjk4OTYsImVtYWlsIjoidmlzaXRvckBtZS5jaCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ2aXNpdG9yQG1lLmNoIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.cZq9_dk5bUrYnkblO3827zWw-Aa_NKq88Gmw7m-86HsZBHZ5U1F818IHvM44MnONNSLjc68KMt7Ax41z5LJ-CA'
// to be used in apollo link
const getToken = () => {
  if (typeof window === 'undefined') return null
  return window.localStorage.getItem('token')
}

const Client = ({ store }) => {
  const { showError } = store.error
  // TODO: use new functionality
  // https://www.apollographql.com/docs/react/migrating/apollo-client-3-migration/?mc_cid=e593721cc7&mc_eid=c8e91f2f0a#apollo-link-and-apollo-link-http
  const authLink = setContext((_, { headers }) => {
    const token = getToken()
    //console.log('apolloClient, token:', token)
    const tokenDecoded = token ? jwtDecode(token) : {}
    //console.log('apolloClient, tokenDecoded:', tokenDecoded)
    // for unknown reason, date.now returns three more after comma
    // numbers than the exp date contains
    const tokenIsValid = token ? tokenDecoded.exp > Date.now() / 1000 : false

    return {
      headers: {
        ...headers,
        'x-hasura-role': 'bb_user',
        //authorization: token && tokenIsValid ? `Bearer ${token}` : '',
        authorization: `Bearer ${token && tokenIsValid ? token : noToken}`,
      },
    }
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

  const batchHttpLink = new BatchHttpLink({
    uri: graphQlUri(),
  })
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
