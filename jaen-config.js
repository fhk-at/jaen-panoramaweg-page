module.exports = {
  remote: 'emailwerk/jaen-panoramaweg-page',
  initialHideUI: true, // optional hide UI on load
  templates: [
    require('./src/templates/HousePage/index.tsx').default,
    require('./src/templates/ApartmentPage/index.tsx').default,
    require('./src/templates/BlogPage/index.tsx').default,
  ]
}
