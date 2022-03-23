var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  // see: https://github.com/gatsbyjs/gatsby/issues/26563#issuecomment-879585547
  if (stage === 'develop' || stage === 'build-javascript') {
    actions.setWebpackConfig({
      plugins: [new CaseSensitivePathsPlugin()],
    })
  }
}
