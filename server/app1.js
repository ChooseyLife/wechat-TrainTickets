const Koa = require('koa');
let router = require('./routers/index').router;
const bodyParser = require('koa-bodyparser');
let app = new Koa();
app.use(bodyParser());
app.use(router.routes());
app.listen(3000);
console.log('listening port 3000');
