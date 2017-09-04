const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  github_username: String,
  role: { type: String, enum: ['employee', 'manager', 'admin'], default: 'employee' },
  first_name: String,
  last_name: String
})

const User = mongoose.model('User', userSchema)

module.exports = User
