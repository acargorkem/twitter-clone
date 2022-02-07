const express = require('express')
const router = express.Router()
const UserService = require('../services/user-service')
const { userRegisterRules } = require('../validations/user.validation')
const validator = require('../validations')

router.post('/register', userRegisterRules(), validator, UserService.register)

module.exports = router
