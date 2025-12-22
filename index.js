import Koa from 'koa'
import Router from 'koa-router'
import { bodyParserMdw, setFinalResponseMdw, setFinalResponseTimeMdw } from './middlewares.js'
import { UserRepository } from './database/UserRepository.js'

const app = new Koa()
const router = new Router()

app.use(setFinalResponseMdw)
app.use(setFinalResponseTimeMdw)
app.use(bodyParserMdw())

router.get('/user', async (ctx, next) => {
  const responseDB = await UserRepository.getUsers()
  ctx.body = { ok: true, responseDB }
})

router.post('/user', async (ctx, next) => {
  console.log(ctx.request.body)
  const { name, email, password } = ctx.request.body
  const userSaved = await UserRepository.createUser(name, email, password)
  ctx.body = { ok: true, userSaved }
})

router.put('/user/:id', async (ctx, next) => {
  const id = ctx.params.id
  const { name, email, password } = ctx.request.body
  const userUpdated = await UserRepository.updateUser({ id, name, email, password })
  ctx.body = { ok: true, userUpdated }
})

router.delete('/user', (ctx, next) => {
  ctx.body = { ok: true, message: 'Hola desde DELETE' }
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => console.log('Server is running on http://localhost:3000'))
