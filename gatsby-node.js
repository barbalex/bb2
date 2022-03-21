var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            // TODO: remove after migrating to hasura
            test: /pouchdb/,
            use: loaders.null(),
          },
          {
            test: /\.html$/,
            loader: require.resolve('html-loader'),
            options: {
              minimize: false,
            },
          },
        ],
      },
    })
  }
  // see: https://github.com/gatsbyjs/gatsby/issues/26563#issuecomment-879585547
  if (stage === 'develop' || stage === 'build-javascript') {
    actions.setWebpackConfig({
      plugins: [new CaseSensitivePathsPlugin()],
    })
  }
}
