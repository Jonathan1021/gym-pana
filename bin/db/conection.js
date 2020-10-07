'use strict'

// Load the Cloudant library.
const Cloudant = require('@cloudant/cloudant');
const Config = require('../config/config-dev.json')

const getConnection = () => {
  return Cloudant({url: Config["db-cloundant"].url, plugins: [{iamauth: {iamApiKey: Config["db-cloundant"]['apikey']}}]}).use(Config["db-cloundant"]["db_name"]);
}

module.exports = {
  getConnection
}