const crypto = require('crypto')
const alg = 'aes-256-ctr'
const pwd = process.env.SESSION_SECRET

const encrypt = text => {
  const cipher = crypto.createCipher(alg, pwd)
  return cipher.update(text, 'utf8', 'hex') + cipher.final('hex')
}

const decrypt = text => {
  const decipher = crypto.createDecipher(alg, pwd)
  return decipher.update(text, 'hex', 'utf8') + decipher.final('utf8')
}

module.exports = {
  encrypt,
  decrypt
}
