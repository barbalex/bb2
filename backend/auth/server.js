'use strict'
// see: https://nodejs.org/de/docs/guides/nodejs-docker-webapp/

const Hapi = require('@hapi/hapi')
// see: https://firebase.google.com/docs/auth/admin/manage-users
const admin = require('firebase-admin')
const postgres = require('postgres')

const serviceAccount = require('./config.js')

const server = new Hapi.Server({
  host: '0.0.0.0',
  port: 7000,
})

const sql = postgres(process.env.HASURA_GRAPHQL_DATABASE_URL)

let firebaseInitializationError = null
// Initialize the Firebase admin SDK with your service account credentials
if (serviceAccount) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  } catch (e) {
    firebaseInitializationError = e
  }
}

async function start() {
  server.route({
    method: '*',
    path: '/',
    handler: () => {
      return `Hello from the auth api`
    },
  })
  server.route({
    method: 'GET',
    path: '/create-user/{email}',
    handler: async (req, h) => {
      if (!serviceAccount) {
        return h.response('Firebase not configured').code(500)
      }
      // Check for errors initializing firebase SDK
      if (firebaseInitializationError) {
        console.log('firebaseInitializationError:', firebaseInitializationError)
        return h
          .response(
            `firebase initalization error: ${firebaseInitializationError.message}`,
          )
          .code(500)
      }
      const { email } = req.params
      if (!email) {
        return h.response('no email was passed').code(500)
      }

      let user
      try {
        user = await admin.auth().createUser({
          email,
          password: 'initial-passwort-bitte-aendern',
        })
      } catch (error) {
        console.log(
          `firebase error while creating user for email ${email}:`,
          error,
        )
        const code = error.errorInfo.code
        if (code === 'auth/email-already-exists') {
          // Somehow the uid did not arrive in vermehrung.ch. Re-query this users uid
          const existingUser = await admin.auth().getUserByEmail(email)
          console.log(`returning uid of the existing user:`, existingUser.uid)
          return h.response(existingUser.uid).code(200)
        }
        return h
          .response(`firebase createUser error: ${error.message}`)
          .code(500)
      }
      return h.response(user.uid).code(200)
    },
  })

  server.route({
    method: 'GET',
    path: '/delete-user/{uid}',
    handler: async (req, h) => {
      if (!serviceAccount) {
        return h.response('Firebase not configured').code(500)
      }
      // Check for errors initializing firebase SDK
      if (firebaseInitializationError) {
        console.log('firebaseInitializationError:', firebaseInitializationError)
        return h
          .response(
            `firebase initalization error: ${firebaseInitializationError.message}`,
          )
          .code(500)
      }

      const { uid } = req.params
      if (!uid) {
        return h.response('no uid was passed').code(500)
      }

      try {
        await admin.auth().deleteUser(uid)
      } catch (error) {
        return h
          .response(`firebase deleteUser error: ${error.message}`)
          .code(500)
      }
      return h.response().code(200)
    },
  })

  server.route({
    method: 'GET',
    path: '/add-hasura-claims/{uid}',
    handler: async (req, h) => {
      // Throw 500 if firebase is not configured
      if (!serviceAccount) {
        return h.response('Firebase not configured').code(500)
      }
      // Check for errors initializing firebase SDK
      if (firebaseInitializationError) {
        console.log('firebaseInitializationError:', firebaseInitializationError)
        return h
          .response(
            `firebase initalization error: ${firebaseInitializationError.message}`,
          )
          .code(500)
      }

      const { uid } = req.params

      const hasuraVariables = {
        'https://hasura.io/jwt/claims': {
          'x-hasura-default-role': 'reader',
          'x-hasura-allowed-roles': [uid ? 'manager' : 'reader'],
        },
      }

      return (
        admin
          .auth()
          // TODO: problem if uid is undefined?
          .setCustomUserClaims(uid, hasuraVariables)
          .then(() => {
            return h.response('user role and id set').code(200)
          })
          .catch((adminError) => {
            console.log('Error creating custom token:', adminError)
            return h
              .response(`Error creating custom token: ${adminError.message}`)
              .code(500)
          })
      )
    },
  })
  await server.start()
  console.log('JSON-API-Server running at:', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

start()