const express = require('express')
const UserService = require('../services/user-service')
const {
  userRegisterRules,
  userLoginRules,
} = require('../validations/user.validation')
const validator = require('../validations')

const router = express.Router()

router.post('/register', userRegisterRules(), validator, UserService.register)
router.post('/login', userLoginRules(), validator, UserService.login)

module.exports = router
