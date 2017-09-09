const models = require('../db/models')

const oauth = () => {}
const oauthCallback = (req, res) => res.redirect('/')
const logout = (req, res) => {
  req.logout()
  res.redirect('/')
}

const userController = {
  oauth,
  oauthCallback,
  logout
}

module.exports = userController
