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

const User = mongoose.model('User', userSchema)

module.exports = User
