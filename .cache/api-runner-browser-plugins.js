module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"scope":"/","name":"mediterranean-migration.com","short_name":"mediterranean-migration","start_url":"/","background_color":"#222222","theme_color":"#222222","display":"standalone","icon":"src/images/favicon.png","include_favicon":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
