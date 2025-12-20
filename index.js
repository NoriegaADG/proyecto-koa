import Koa from 'koa'
import {setFinalResponseMdw, setFinalResponseTimeMdw} from './middlewares.js'

const app = new Koa()

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