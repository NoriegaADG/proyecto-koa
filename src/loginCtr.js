import { UserRepository } from '../database/UserRepository.js'
import { comparePassword } from './utils/hashPassword.js'
import { createToken } from './utils/tokenGenerator.js'

export const signIn = async (ctx) => {
  const { email, password } = ctx.request.body

  if (!email || !password) {
    ctx.status = 400
    ctx.body = {
      ok: false,
      message: 'Email y password son requeridos'
    }
    return
  }

  const foundUser = await UserRepository.getUserByEmail(email)

  if (!foundUser) {
    ctx.status = 404
    ctx.body = {
      ok: false,
      message: 'Usuario no encontrado'
    }
    return
  }

  const passwordMatch = await comparePassword(password, foundUser.password)

  if (!passwordMatch) {
    ctx.status = 401
    ctx.body = {
      ok: false,
      message: 'Contraseña incorrecta'
    }
    return
  }

  const jwt = createToken({ id: foundUser.id, email: foundUser.email })
  const data = { id: foundUser.id, email: foundUser.email }

  ctx.status = 200
  ctx.body = {
    ok: true,
    data,
    jwt
  }
}
