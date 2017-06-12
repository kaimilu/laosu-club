/*  header-comment
/*  file   : restc
/*  author : loasu
/*  date   : 2017-6-1 16:55:7
/*  last   : 2017-6-1 16:58:34
*/
/**
 * 是一个 HTTP 服务器中间件
 * https://elemefe.github.io/restc/intro/
 */
const restc = require('restc')

module.exports = class {
  async beforeUseRoutes({
    app
  }) {
    app.use(restc.koa2())
  }
}
