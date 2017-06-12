const jwt = require('jsonwebtoken')
const config = require('../conf/config')

let secret = config.tokenSecret
let expiresIn = config.tokenExpiresIn

module.exports = {

}
