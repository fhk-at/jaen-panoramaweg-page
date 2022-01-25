module.exports = {
  remote: 'emailwerk/jaen-panoramaweg-page',
  initialHideUI: true, // optional hide UI on load
  templates: [
    require('./src/templates/HousePage/index.tsx'),
    require('./src/templates/ApartmentPage/index.tsx'),
    require('./src/templates/BlogPage/index.tsx'),
  ]
}
