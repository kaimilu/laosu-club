const base = require('./blogpack.base.config')
const userRoutesPrefix = '../plugins/beforeUseRoutes'
const serverStartPrefix = '../plugins/beforeServerStart'
const env = process.env

const config = Object.assign({}, base)

const BodyParserPlugin = require(`${userRoutesPrefix}/bodyParser`)
const LogTimePlugin = require(`${userRoutesPrefix}/logTime`)
const RestcPlugin = require(`${userRoutesPrefix}/restc`)

const InitOptionPlugin = require('${serverStartPrefix}/initOption')
const InstallThemePlugin = require('${serverStartPrefix}/installTheme')
const InitUserPlugin = require('${serverStartPrefix}/initUser')

const CheckAuthPlugin = require('../plugins/beforeRestful/checkAuth')




module.exports = config
