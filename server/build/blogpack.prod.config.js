const devConfig = require('./blogpack.dev.config')
const useRoutesPrefix = '../plugins/beforeUseRoutes'
const isTest = process.env.NODE_ENV === 'TEST'
const config = Object.assign({}, devConfig)

const RatelimitPlugin = require(`${useRoutesPrefix}/ratelimit`)

  !isTest && config.plugins.unshift(
    new RatelimitPlugin({
      duration: 1000,
      errorMessage: 'Slow Down Your Request.',
      id: ctx => ctx.ip,
      max: 10
    })
  )

module.exports = config
