import {
  ApolloClient,
  InMemoryCache,
  defaultDataIdFromObject,
} from '@apollo/client'
import { BatchHttpLink } from '@apollo/client/link/batch-http'
import { setContext } from '@apollo/client/link/context'
import { ApolloLink, HttpLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import jwtDecode from 'jwt-decode'
import uniqBy from 'lodash/uniqBy'

import graphQlUri from './modules/graphQlUri'
import existsPermissionsError from './modules/existsPermissionError'

const noToken =
  'eyJhbGciOiJIUzUxMiIsImtpZCI6ImY5N2U3ZWVlY2YwMWM4MDhiZjRhYjkzOTczNDBiZmIyOTgyZTg0NzUiLCJ0eXAiOiJKV1QifQ.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6ImFub255bW91cyIsIngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiYW5vbnltb3VzIl19LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYmx1ZS1ib3JkZXJzIiwiYXVkIjoiYmx1ZS1ib3JkZXJzIiwiYXV0aF90aW1lIjoxNjg4MTE3OTU2LCJ1c2VyX2lkIjoiSERqQVp5bERha2JiSVd1YXVpcXQ1eDFNbXZpMiIsInN1YiI6IkhEakFaeWxEYWtiYklXdWF1aXF0NXgxTW12aTIiLCJpYXQiOjE3OTgxMTc5NjEsImV4cCI6MTc5ODEyMTU2MSwiZW1haWwiOiJ2aXNpdG9yQHZpc2l0b3IuY2giLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidmlzaXRvckB2aXNpdG9yLmNoIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.9wsHhGVwjf5YyeqgwhwI41ejzIdYBso6hnWIxpCjxsklZwJiXCLSMJXDORMCvRjGoJxsBrh0nMd9I-pj8ABylg'

// to be used in apollo link
const getToken = () => {
  if (typeof window === 'undefined') return null
  return window.localStorage.getItem('token') ?? noToken
}

const Client = ({ store }) => {
  const { showError } = store
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

    // if (!(token && tokenIsValid)) return headers

    return {
      headers: {
        ...headers,
        'x-hasura-role': 'bb_user',
        authorization: `Bearer ${token ?? 'just-any-value'}`,
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
      // BEWARE: the following functions/types use existing id's as their id (or non-guid-ids)
      // thus once loaded apollo will replace the existing models in the cache with their data
      // this will cause hard to solve issues
      // so need to force default data id that combines __typename with id
      // list all query names that do not return pure table rows
      if (['VEventYears'].includes(object.__typename)) {
        return defaultDataIdFromObject(object)
      }
      return object.id
      // if (object.id && isNaN(object.id)) {
      //   return object.id
      // }
      // return defaultDataIdFromObject(object)
    },
  })

  const batchHttpLink = new HttpLink({
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
