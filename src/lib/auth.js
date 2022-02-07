const crypto = require('crypto')
const _ = require('lodash')

const generateSaltAndHash = (password) => {
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex')
  return { salt, hash }
}

const validatePassword = (user, inputPassword) => {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex')
  return user.hash === inputHash
}

const userToJSON = (user) => _.omit(user, ['hash', 'salt'])

module.exports = { generateSaltAndHash, validatePassword, userToJSON }
