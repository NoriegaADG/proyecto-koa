import Koa from 'koa'
import Router from 'koa-router'
import { setFinalResponseMdw, setFinalResponseTimeMdw } from './middlewares.js'
import { UserRepository } from './database/UserRepository.js'

const app = new Koa()
const router = new Router()

app.use(setFinalResponseMdw)
app.use(setFinalResponseTimeMdw)

app.use(router.routes())
app.use(router.allowedMethods())

router.get('/user', async (ctx, next) => {
  const responseDB = await UserRepository.getUsers
  ctx.body = { ok: true, message: responseDB }
})

router.post('/user', (ctx, next) => {
  ctx.body = { ok: true, message: 'Hola desde POST' }
})

router.put('/user', (ctx, next) => {
  ctx.body = { ok: true, message: 'Hola desde PUT' }
})

router.delete('/user', (ctx, next) => {
  ctx.body = { ok: true, message: 'Hola desde DELETE' }
})

app.listen(3000, () => console.log('Server is running on http://localhost:3000'))
