module.exports = {
  siteMetadata: {
    title: 'mediterranean migration',
    siteUrl: `https://mediterranean-migration.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public|docs)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: {
        prefixes: [
          '/actors/*',
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
  ],
}
