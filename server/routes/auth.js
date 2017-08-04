const querystring = require('querystring')
const callbackURL = `http://localhost:3000/auth/github/callback`
const params = querystring.stringify({ client_id: process.env.GITHUB_CLIENT_ID, redirect_uri: callbackURL })
const OAuthURL = `http://github.com/login/oauth/authorize?${params}`
const axios = require('axios')

module.exports = [
  {
    method: 'get',
    url: '/auth/github',
    handler: (req, res) => res.redirect(OAuthURL)
  },
  {
    method: 'get',
    url: '/auth/github/callback',
    handler: (req, res) => {
      const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env
      axios({
        method: 'post',
        url: 'https://github.com/login/oauth/access_token',
        data: {
          client_id: GITHUB_CLIENT_ID,
          client_secret: GITHUB_CLIENT_SECRET,
          code: req.query.code
        }
      })
      .then(({ data }) => res.json(data))
    }
  }
]
