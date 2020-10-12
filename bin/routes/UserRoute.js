'use strict'

const express = require('express')
const router = express.Router()
const UserService = require('../services/UserServices')

router
  .post('/user', UserService.saveUser)
  .get('/user', UserService.getUserAll)
  .get('/user/:id', UserService.getUserById)
  

module.exports = router