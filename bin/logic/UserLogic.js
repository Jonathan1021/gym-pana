'use strict'

const UserDomain = require('../dao/UserDao')
const User = require('../dto/UserDTO')

/**
 * Método que permite guardar un Usuario
 * @param {*} variables
 */
const saveUser = async (opts) => {
  const user = new User(opts)
  return await new UserDomain().save(user)  
}

module.exports = {
  saveUser
}