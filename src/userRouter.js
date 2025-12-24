import Router from 'koa-router'
import userCtr from './userCtr.js'
import loginCtr from './loginCtr.js'
import { valideTokenMiddleware } from '../middlewares.js'
import { validateUpdateUserMdw } from './validateUpdateUserMdw.js'

const router = new Router()

router.post('/login', loginCtr.signIn)
router.post('/user', validateUpdateUserMdw, userCtr.createUser)

router.get('/user', valideTokenMiddleware, userCtr.getAllUsers)
router.get('/user/:id', valideTokenMiddleware, userCtr.getUserById)
router.put('/user/:id', valideTokenMiddleware, userCtr.updateUser)
router.delete('/user/:id', valideTokenMiddleware, userCtr.deleteUser)

export default router
