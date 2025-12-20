import Koa from 'koa'
import Router from 'koa-router'
import { setFinalResponseMdw, setFinalResponseTimeMdw } from './middlewares.js'

const app = new Koa()
const router = new Router()

app.use(setFinalResponseMdw)
app.use(setFinalResponseTimeMdw)

app.use(router.routes())
app.use(router.allowedMethods())

router.get('/user', (ctx, next) => {
  ctx.body = 'Hola desde GET'
})

router.post('/user', (ctx, next) => {
  ctx.body = 'Hola desde POST'
})

router.put('/user', (ctx, next) => {
  ctx.body = 'Hola desde PUT'
})

router.delete('/user', (ctx, next) => {
  ctx.body = 'Hola desde DELETE'
})

app.listen(3000, () => console.log('Server is running on http://localhost:3000'))
