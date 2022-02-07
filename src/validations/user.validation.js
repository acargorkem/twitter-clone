const { body } = require('express-validator')
const UserService = require('../services/user-service')

const userRegisterRules = () => {
  return [
    body('username', 'Username must be at least 2 characters long.')
      .isString()
      .isLength({ min: 2 })
      .custom(async (value) => {
        const existingUserName = await UserService.findOneBy('username', value)
        if (existingUserName) {
          return Promise.reject('Username already exists.')
        }
      }),
    body('email', 'Please enter a valid e-mail')
      .isEmail()
      .custom(async (value) => {
        const existingEmail = await UserService.findOneBy('email', value)
        if (existingEmail) {
          return Promise.reject('E-mail already exists.')
        }
      }),
    body('password', 'Please enter a password at least 6 characters.')
      .trim()
      .isLength({ min: 6 })
  ]
}

const userLoginRules = () => {
  let user
  return [
    body('username', 'Username must be at least 2 characters long.')
      .isString()
      .isLength({ min: 2 }),

    body('password', 'Please enter a password at least 6 characters.')
      .trim()
      .isLength({ min: 6 })
  ]
}

module.exports = { userRegisterRules, userLoginRules }
