'use strict'

const express = require('express')
const router = express.Router()
const UserService = require('../services/UserServices')

router
  .post('/user', UserService.saveUser)
  .get('/user', UserService.getUser)
  .get('/user/:id', UserService.getUser)
  

module.exports = router