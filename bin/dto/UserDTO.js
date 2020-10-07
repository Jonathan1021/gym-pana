'use strict'

class User {
  constructor(opts) {
    this.name = opts.name
    this.identification = opts.identification
    this.mobile = opts.mobile
    this.phone = opts.phone
    this.email = opts.email
    this.typePlan = opts.typePlan
    this.value = opts.value
    this.creation = new Date()
  }
}

module.exports = User