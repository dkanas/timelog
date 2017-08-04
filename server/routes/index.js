const router = require('express').Router()
const authRoutes = require('./auth')

const routes = [
  ...authRoutes
]

authRoutes.forEach(({ method, url, handler }) => router[method](url, handler))

module.exports = router
