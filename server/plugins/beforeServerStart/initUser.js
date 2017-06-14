const log = require('../../utils/log')
const config = require('../../conf/config')
const models = require('../../model/mongo')

console.log('initUser=======================')
module.exports = class {
  async beforeServerStart() {
    const count = await models.user.find().count().exec()
    console.log('initUser=======================')
    if (count !== 0) return

    if (config.defaultAdminPassword === 'admin') {
      log.error('you must change the default password at ./conf/config.js')
      log.error('koa2 refused to start because of weak password')
      return process.exit(1)
    }
    const result = await models.user.create({
      name: config.defaultAdminName,
      password: config.defaultAdminPassword,
      displayName: config.defaultAdminName,
      email: ''
    })

    log.info(`account '${result.name}' is created`)

  }
}