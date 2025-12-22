import { UserRepository } from './database/UserRepository.js'

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
  const id = ctx.params.id
  const { name, email, password } = ctx.request.body
  const userUpdated = await UserRepository.updateUser({ id, name, email, password })
  ctx.body = { ok: true, userUpdated }
}

export const updateUser = async (ctx) => {
  console.log(ctx.request.body)
  const { name, email, password } = ctx.request.body
  const userSaved = await UserRepository.createUser(name, email, password)
  ctx.body = { ok: true, userSaved }
}

export const deleteUser = async (ctx) => {
  const id = ctx.params.id
  const userDeleted = await UserRepository.deleteUser(id)
  ctx.body = { ok: true, userDeleted }
}

export const userCtr = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}
