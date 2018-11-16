const Koa = require('koa')
const train = require('./TranTickets')
let router = require('koa-router')()
const bodyParser = require('koa-bodyparser')

let app = new Koa()
app.use(bodyParser())
app.use(router.routes())

router.post('/price', async (ctx) => {
    let data = ctx.request.body
    ctx.body = await train.QueryPrice(data)
})


app.listen(3000)
console.log('listening port 3000')