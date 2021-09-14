const path = require('path')

const siteMetadata = require('./site-metadata')

module.exports = {
  siteMetadata,
  plugins: [
    '@snek-at/jaen',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('node-sass')
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: '@snek-at/jaen-pages',
      options: {
        templates: {
          HousePage: path.resolve('src/templates/HousePage/index.tsx'),
          ApartmentPage: path.resolve('src/templates/ApartmentPage/index.tsx'),
          BlogPage: path.resolve('src/templates/BlogPage/index.tsx')
        }
      }
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: false,
        isUsingColorMode: true
      }
    }
  ]
}
