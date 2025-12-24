import { UserRepository } from '../database/UserRepository.js'
import { hashPassword } from './utils/hashPassword.js'

export const getAllUsers = async (ctx) => {
  const responseDB = await UserRepository.getUsers()
  ctx.body = { ok: true, responseDB }
}

export const getUserById = async (ctx) => {
  const id = ctx.params.id
  const user = await UserRepository.getUserById(id)
  ctx.body = { ok: true, user }
}

export const createUser = async (ctx) => {
  console.log(ctx.request.body)
  const { name, email, password } = ctx.request.body
  const passwordHashed = await hashPassword(password)
  const userSaved = await UserRepository.createUser({ name, email, password: passwordHashed })
  ctx.body = { ok: true, userSaved }
}

export const updateUser = async (ctx) => {
  const id = ctx.params.id
  const { name, email, password } = ctx.request.body
  const passwordHashed = await hashPassword(password)
  const userUpdated = await UserRepository.updateUser({ id, name, email, password: passwordHashed })
  ctx.body = { ok: true, userUpdated }
}

export const deleteUser = async (ctx) => {
  const id = ctx.params.id
  const userDeleted = await UserRepository.deleteUser(id)
  ctx.body = { ok: true, userDeleted }
}

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}
