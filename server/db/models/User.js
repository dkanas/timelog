const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  github_username: 'string',
  role: 'string',
  first_name: 'string',
  last_name: 'string'
})

const User = mongoose.model('User', userSchema)

module.exports = User
