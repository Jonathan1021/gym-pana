'use strict'

const UserLogic = require('../logic/UserLogic')

/**
 * Servicio de creación de usuario
 * @param {*} req
 * @param {*} res
 */
const saveUser = async (req, res) => {
  try {
    
    const user = req.body    
    console.log(user)
    const userSaved = await UserLogic.saveUser(user)
    console.log(userSaved)
  } catch (error) {
    res.status(500).send({err: error.message})
  }
  return res.status(201).send()
}

module.exports = {
  saveUser
}