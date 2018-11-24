let router = require('koa-router')()
let train = require('../TranTickets')

router.post('/price', async (ctx) => {
    let data = ctx.request.body
    ctx.body = await train.QueryPrice(data)
})

router.post('/ticket', async (ctx) => {
    let data = ctx.request.body
    ctx.body = await train.QueryTicket(data)
})

router.post('/station', async (ctx) => {
    let data = ctx.request.body
    ctx.body = await train.QueryStations(data)
})

module.exports = {
    router: router
}