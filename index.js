const Koa = require('koa')
const app = new Koa()

const { setFinalResponseMdw, setFinalResponseTimeMdw } = require('./middlewares')

//Primer middleware
app.use(setFinalResponseMdw)

//Segundo middleware
app.use(setFinalResponseTimeMdw)

//Tercer middleware
app.use(async ctx => {
  console.log('Pasa 5')
  ctx.body = 'Hola Mundo desde KOA';
})

app.listen(3000, ()=> console.log('Server is running on http://localhost:3000'))