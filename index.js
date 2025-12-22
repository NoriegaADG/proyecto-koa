import Koa from 'koa'
import { bodyParserMdw, setFinalResponseMdw, setFinalResponseTimeMdw } from './middlewares.js'
import userRouter from '.src/userRouter.js'

const app = new Koa()

app.use(setFinalResponseMdw)
app.use(setFinalResponseTimeMdw)
app.use(bodyParserMdw())

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(3000, () => console.log('Server is running on http://localhost:3000'))
