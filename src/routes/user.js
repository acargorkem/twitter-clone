const express = require('express')
const passport = require('passport')
const { register } = require('../controllers/userController')
const {
  userRegisterRules,
  userLoginRules,
} = require('../validations/user.validation')
const validator = require('../validations')

const router = express.Router()

router.post('/register', userRegisterRules(), validator, register)
router.post(
  '/login',
  userLoginRules(),
  validator,
  passport.authenticate('local'),
  (req, res) => {
    res.status(200)
    return res.json({ user: req.user })
  },
)

module.exports = router
