const bodyParser = require('koa-bodyparser')

module.exports = class {
  async beforeUserRoutes({
    app
  }) {
    app.use(bodyParser())
  }
}
