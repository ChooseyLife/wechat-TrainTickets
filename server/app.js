let Koa = require('koa')
let Promise = require('bluebird')

let app = new Koa()

app.use(async ctx => {
    console.log(ctx)
    if(ctx.path === '/'){
        ctx.body = 'Hello, this is 3000'
    }
    if(ctx.path === '/tran'){
        let url = ctx.url
        // 从上下文的request对象中获取
        let request = ctx.request
        let req_query = request.query
        let req_querystring = request.querystring

        // 从上下文中直接获取
        let ctx_query = ctx.query
        let ctx_querystring = ctx.querystring

        ctx.body = {
            url,
            req_query,
            req_querystring,
            ctx_query,
            ctx_querystring
        }
    }
});

app.listen(3000)
console.log('Listening Port: 3000')