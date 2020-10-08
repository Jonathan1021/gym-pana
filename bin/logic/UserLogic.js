'use strict'

const UserDomain = require('../dao/UserDao')

/**
 * Método que permite guardar un Usuario
 * @param {*} variables
 */
const saveUser = async (opts) => {
  return await new UserDomain().save(opts)  
}

module.exports = {
  saveUser
}