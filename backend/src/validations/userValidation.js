const mongoose = require('mongoose')
const { body, param } = require('express-validator')
const UserService = require('../services/userService')

const userRegisterRules = () => [
  body('username', 'Username must be at least 2 characters long.')
    .isString()
    .isLength({ min: 2 })
    .custom(async (value) => {
      const existingUserName = await UserService.findOneBy('username', value)
      if (existingUserName) {
        return Promise.reject(new Error('Username already exists.'))
      }
      return true
    }),
  body('email', 'Please enter a valid e-mail')
    .isEmail()
    .custom(async (value) => {
      const existingEmail = await UserService.findOneBy('email', value)
      if (existingEmail) {
        return Promise.reject(new Error('E-mail already exists.'))
      }
      return true
    }),
  body('password', 'Please enter a password at least 6 characters.')
    .trim()
    .isLength({ min: 6 }),
]

const userLoginRules = () => [
  body('username', 'Username must be at least 2 characters long.')
    .isString()
    .isLength({ min: 2 }),
  body('password', 'Please enter a password at least 6 characters.')
    .trim()
    .isLength({ min: 6 }),
]

const getUserRules = () => [
  param('userId').custom((value) => {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      return Promise.reject(new Error('Not valid user id.'))
    }
    return true
  }),
]

const followRules = () => [
  body('followedUserId').custom((value) => {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      return Promise.reject(new Error('Not valid user id.'))
    }
    return true
  }),
]

const checkUserRules = () => [
  body('username', 'Username or e-mail must be at least 2 characters long.')
    .exists()
    .bail()
    .isString()
    .isLength({ min: 2 }),
]

module.exports = {
  userRegisterRules,
  userLoginRules,
  getUserRules,
  followRules,
  checkUserRules,
}
