export default store => ({
  path: '/settings',
  getComponent: (nextState, cb) => {
    require.ensure([], (require) => {
      const Settings = require('./components/Settings').default

      cb(null, Settings)
    }, 'settings')
  }
})
