'use strict'

const UserLogic = require('../logic/UserLogic')

/**
 * Servicio de creación de usuario
 * @param {*} req
 * @param {*} res
 */
const saveUser = async (req, res) => {
  let userSaved = {}
  try {    
    const user = req.body    
    userSaved = await UserLogic.saveUser(user)
  } catch (error) {
    console.log(error)
    res.status(500).send({err: error.message})
  }
  return res.status(201).send(userSaved)
}

module.exports = {
  saveUser
}