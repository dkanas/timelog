const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const mainRouter = express.Router()
const passport = require('../utils/passport')
const mongoose = require('../db/index')
const userController = require('../controllers/userController')
const { logger } = require('../utils')

mainRouter.use(session({
  secret: process.env.SESSION_SECRET,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false
}))
mainRouter.use(passport.initialize())
mainRouter.use(passport.session())

const authMiddleware = (req, res, next) => {
  if (!req.isAuthenticated()) return res.status(401).send()
  else next()
}

// user
const userRouter = express.Router()
userRouter.get('/oauth', passport.authenticate('github'))
userRouter.get('/oauth/callback', passport.authenticate('github'), userController.oauthCallback)
userRouter.get('/logout', authMiddleware, userController.logout)
userRouter.get('/checkAuth', userController.checkAuth)
userRouter.get('/details', authMiddleware, userController.getUserDetails)
mainRouter.use('/user', userRouter)

module.exports = mainRouter
