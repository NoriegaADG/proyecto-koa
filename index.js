import Koa from 'koa'
import 'dotenv/config'
import { bodyParserMdw, errorCatcherMdw, setFinalResponseMdw, setFinalResponseTimeMdw } from './middlewares.js'
import userRouter from './src/userRouter.js'

const app = new Koa()
app.use(errorCatcherMdw)
app.use(setFinalResponseMdw)
app.use(setFinalResponseTimeMdw)
app.use(bodyParserMdw())

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
