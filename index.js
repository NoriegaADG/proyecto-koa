import Koa from 'koa'
import 'dotenv/config'
import bodyParser from 'koa-bodyparser' // <- body parser oficial
import { errorCatcherMdw, setFinalResponseMdw, setFinalResponseTimeMdw } from './middlewares.js'
import userRouter from './src/userRouter.js'

const app = new Koa()

// Middlewares globales
app.use(errorCatcherMdw)
app.use(setFinalResponseMdw)
app.use(setFinalResponseTimeMdw)

// Body parser confiable, debe ir antes del router
app.use(bodyParser())

// Router
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
