const express = require('express')
const router = express.Router()
const UserService = require('../services/user-service')
const auth = require('../lib/auth')
const { userRegisterRules } = require('../validations/user.validation')
const validator = require('../validations')

router.post('/register', userRegisterRules(), validator, async (req, res) => {
  const { username, password, email } = req.body
  const { salt, hash } = auth.generateSaltAndHash(password)

  const user = await UserService.save({
    username,
    email,
    hash,
    salt
  })

  const safeUser = auth.userToJSON(user)

  res.json({ user: safeUser })
})

module.exports = router
