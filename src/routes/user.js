const express = require('express')
const router = express.Router()
const UserService = require('../services/user-service')
const auth = require('../lib/auth')

router.post('/register', async (req, res) => {
  const { username, password, email } = req.body
  if (!username) {
    return res.status(422).json({ errors: { username: `can't be blank` } })
  }

  if (!email) {
    return res.status(422).json({ errors: { email: `can't be blank` } })
  }

  if (!password) {
    return res.status(422).json({ errors: { password: `can't be blank` } })
  }

  const existingUserName = await UserService.findOneBy('username', username)

  if (existingUserName) {
    return res.status(422).json({ errors: { username: 'user already exists' } })
  }

  const existingEmail = await UserService.findOneBy('email', email)

  if (existingEmail) {
    return res.status(422).json({ errors: { email: 'user already exists' } })
  }

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
