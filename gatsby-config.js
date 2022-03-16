module.exports = {
  siteMetadata: {
    title: 'mediterranean migration',
    siteUrl: `https://mediterranean-migration.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: {
        prefixes: [
          '/events/*',
          '/publications/*',
          '/articles/*',
          '/monthly-events/*',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        scope: '/',
        name: 'mediterranean-migration.com',
        short_name: 'mediterranean-migration',
        start_url: '/',
        background_color: '#222222',
        theme_color: '#222222',
        display: 'standalone',
        icon: 'src/images/favicon.png',
        include_favicon: true,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-72242597-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'mediterranean-migration.com',
      },
    },
  ],
}
