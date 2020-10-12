'use strict'

const UserDomain = require('../dao/UserDao')

/**
 * Método que permite guardar un Usuario
 * @param {*} variables
 */
const saveUser = async (opts) => {
  return await new UserDomain().save(opts)  
}

const getUser = async (_id) => {
  if (_id) {
    const userFound = await new UserDomain().getUserById(_id)
    return userFound.length ? userFound[0] : {}
  }
  return await new UserDomain().getUserAll()
}

module.exports = {
  saveUser,
  getUser
}