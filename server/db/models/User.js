const pick = require('lodash/pick')
const mongoose = require('../index')
const { crypto } = require('../../utils')

const userSchema = new mongoose.Schema({
  githubId: Number,
  githubToken: {
    type: String,
    set: crypto.encrypt,
    get: crypto.decrypt
  },
  role: { type: String, enum: ['employee', 'manager', 'admin'], default: 'employee' },
  firstName: String,
  lastName: String
})

const safeFields = ['firstName', 'lastName', 'githubId', 'role']
userSchema.methods.toSafeJSON = function () {
  const unsafeJSON = this.toJSON()
  return pick(unsafeJSON, safeFields)
}

const User = mongoose.model('User', userSchema)

module.exports = User
