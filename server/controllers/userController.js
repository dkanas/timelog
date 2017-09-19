const models = require('../db/models')

const oauth = () => {}
const oauthCallback = (req, res) => res.redirect('/')
const logout = (req, res) => {
  req.logout()
  res.redirect('/')
}
const checkAuth = (req, res) => res.json({ authenticated: req.isAuthenticated() })
const getUserDetails = (req, res) => res.json(req.user.toSafeJSON())

const userController = {
  oauth,
  oauthCallback,
  logout,
  checkAuth,
  getUserDetails
}

module.exports = userController
