import Router from 'koa-router'
import { userCtr } from './src/userCtr.js'

const router = new Router()

router.get('/user', userCtr.getAllUsers)

router.get('/user/:id', userCtr.getUserById)

router.post('/user', userCtr.createUser)

router.put('/user/:id', userCtr.updateUser)

router.put('/user/:id', userCtr.deleteUser)

export default router
