/**
 * starts a hapi server
 * in production
 */

const Hapi = require('hapi')
const Inert = require('inert')

/*
const serverOptionsDevelopment = {
  debug: {
    log: ['error'],
    request: ['error']
  }
}*/
const server = new Hapi.Server({
  host: '0.0.0.0',
  port: 3000,
})

async function start() {
  try {
    await server.register(Inert)
  } catch (error) {
    throw error
  }

  server.route({
    method: 'GET',
    path: '/manifest.json',
    handler: {
      file: 'manifest.json',
    },
  })

  server.route({
    method: 'GET',
    path: '/asset-manifest.json',
    handler: {
      file: 'asset-manifest.json',
    },
  })

  server.route({
    method: 'GET',
    path: '/service-worker.js',
    handler: {
      file: 'service-worker.js',
    },
  })

  server.route({
    method: 'GET',
    path: '/tinymce.css',
    handler: {
      file: 'tinymce.css',
    },
  })

  server.route({
    method: 'GET',
    path: '/favicon.ico',
    handler: {
      file: 'favicon.ico',
    },
  })

  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
      file: 'index.html',
    },
  })

  server.route({
    method: 'GET',
    path: '/static/css/{param*}',
    handler: {
      directory: {
        path: 'static/css',
        index: false,
      },
    },
  })

  server.route({
    method: 'GET',
    path: '/static/js/{param*}',
    handler: {
      directory: {
        path: 'static/js',
        index: false,
      },
    },
  })

  server.route({
    method: 'GET',
    path: '/static/media/{param*}',
    handler: {
      directory: {
        path: 'static/media',
        index: false,
      },
    },
  })

  server.route({
    method: 'GET',
    path: '/favicons/{param*}',
    handler: {
      directory: {
        path: 'favicons',
        index: false,
      },
    },
  })

  try {
    await server.start()
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
  console.log('Server running at:', server.info.uri)
}

start()
