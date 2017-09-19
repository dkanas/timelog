const passport = require('passport')
const GithubStrategy = require('passport-github').Strategy
const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env
const models = require('../db/models')
const { logger } = require('../utils')
const get = require('lodash/get')

passport.use(new GithubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/api/user/oauth/callback'
  },
  async (accessToken, refreshToken, profile, cb) => {
    try {
      const user = await models.User.findOne({ githubId: profile.id })
      const avatar = get(profile, ['photos', 0, 'value'])

      if (user) {
        user.githubToken = accessToken
        if (avatar) user.avatar = avatar
        user.githubLogin = profile.username
        await user.save()
        cb(null, user)
      }
      else {
        models.User.create({
          githubId: profile.id,
          githubToken: accessToken,
          avatar,
          githubLogin: profile.username,
          firstName: '',
          lastName: '',
          role: 'employee'
        })
        .then(user => cb(null, user))
        .catch(err => {
          logger.error(err)
          cb('Error while creating new user', null)
        })
      }
    }
    catch (e) {
      cb(e, null)
      logger.error(e)
    }
  }
))

passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser(async (_id, done) => {
  models.User.findOne({ _id })
    .then(user => done(null, user))
    .catch(err => {
      logger.error(err)
      done(err, null)
    })
})

module.exports = passport
