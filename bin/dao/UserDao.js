'use strict'

const Database = require('../db/conection')

class UserDao {
  constructor() {
    this.connection = Database.getConnection()
  }

  async save(user) {
    return await this.connection.insert(user)
  }
}

module.exports = UserDao
