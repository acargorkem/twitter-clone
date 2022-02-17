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

router.post('/login', userLoginRules(), validator, (req, res, next) => {
  passport.authenticate('local', (error, user) => {
    if (error) {
      res.status(422)
      return res.json({ error: error.message })
    }
    return req.login(user, (err) => {
      if (err) {
        return next(err)
      }
      return res.send({ user })
    })
  })(req, res, next)
})

router.post('/logout', (req, res) => {
  req.logOut()
  res.status(200)
  return res.json({ message: 'Successfully logged out' })
})

router.post('/follow', checkAuthentication, followRules(), validator, follow)

router.post(
  '/unfollow',
  checkAuthentication,
  followRules(),
  validator,
  unfollow,
)

module.exports = router
