'use strict'

const User = require('../dto/UserDTO')

class UserDao {
  constructor() {
    this.user = User()
  }

  async save(user) {
    return (await this.user.create(user)).dataValues
  }

  async getUserById(id) {
    return await this.user.findAll({
      where: {
        identification: id
      },
      limit: 1
    });
  }

  async getUserAll(where) {
    return await this.user.findAll({where})
  }
}

module.exports = UserDao