'use strict'

const express = require('express')
const router = express.Router()
const UserService = require('../services/UserServices')

router
  .post('/user', UserService.saveUser)

module.exports = router