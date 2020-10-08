'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../db/conection')
const config = require('../config/config-dev')

module.exports = function setupUserModel() {
  const sequelize = setupDatabase(config)

  return sequelize.define('user', {
    iduser: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    identification: {
      type: Sequelize.STRING,
      allowNull: false
    },
    mobile: {
      type: Sequelize.STRING,
      allowNull: true
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true
    },
    typePlan: {
      type: Sequelize.STRING,
      allowNull: true
    },
    value: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
  }, {
    timestamps: false
  })
}