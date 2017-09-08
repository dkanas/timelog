const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.set('debug', true)

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env
const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`

mongoose.connect(URI)

module.exports = mongoose
