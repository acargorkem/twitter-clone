const express = require('express')
const passport = require('passport')
const {
  register,
  getUser,
  follow,
  unfollow,
} = require('../controllers/userController')
const {
  userRegisterRules,
  userLoginRules,
  getUserRules,
  followRules,
} = require('../validations/user.validation')
const validator = require('../validations')
const { checkAuthentication } = require('../middlewares/auth')

const router = express.Router()

router.get('/', getUserRules(), validator, getUser)

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

router.post('/follow', checkAuthentication, followRules(), validator, follow)

router.post(
  '/unfollow',
  checkAuthentication,
  followRules(),
  validator,
  unfollow,
)

module.exports = router
