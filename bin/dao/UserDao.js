'use strict'

const User = require('../dto/UserDTO')

class UserDao {
  constructor() {
    this.user = User()
  }

  async save(user) {
    return (await this.user.create(user)).dataValues
  }
}

module.exports = UserDao