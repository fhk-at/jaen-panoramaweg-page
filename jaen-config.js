module.exports = {
  remote: 'emailwerk/jaen-panoramaweg-page',
  plugins: {
    pages: {
      resolve: require('@snek-at/jaen-pages/jaen-register'),
      templates: [
        require('./src/templates/HousePage/index.tsx'),
        require('./src/templates/ApartmentPage/index.tsx'),
        require('./src/templates/ContactPage/index.tsx'),
        require('./src/templates/LocationPage/index.tsx'),
        require('./src/templates/BlogPage/index.tsx'),
        require('./src/templates/ImmoPage/index.tsx')
      ]
    }
  }
}
