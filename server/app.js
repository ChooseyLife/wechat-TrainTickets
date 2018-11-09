let Koa = require('koa')
let Promise = require('bluebird')

let app = new Koa()

app.use(async ctx => {
    console.log(ctx)
    if(ctx.path === '/'){
        let html = `
      <h1>koa2 request post demo</h1>
      <form method="POST" action="/tran">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>
    `
        ctx.body = html
    }
    if(ctx.path === '/tran' && ctx.method === 'POST'){

    }
});

app.listen(3000)
console.log('Listening Port: 3000')