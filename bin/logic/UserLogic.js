'use strict'

const UserDomain = require('../dao/UserDao')

/**
 * Método que permite guardar un Usuario
 * @param {*} variables
 */
const saveUser = async (opts) => {
  return await new UserDomain().save(opts)  
}

const getUserById = async (_id = 0) => {
  const userFound = await new UserDomain().getUserById(_id)
  return userFound.length ? userFound[0] : {} 
}

const getUserAll = async (opts) => {
  const usersFound = await new UserDomain().getUserAll(opts)
  return usersFound.length === 1 ? usersFound[0] : usersFound
}

module.exports = {
  saveUser,
  getUserById,
  getUserAll
}