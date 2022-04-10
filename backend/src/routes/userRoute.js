const express = require('express')
const {
  register,
  login,
  getUser,
  follow,
  unfollow,
  logout,
  checkUserIsExists,
} = require('../controllers/userController')
const {
  userRegisterRules,
  userLoginRules,
  getUserRules,
  followRules,
  checkUserRules,
} = require('../validations/userValidation')
const validator = require('../validations')
const { checkAuthentication } = require('../middlewares/auth')
const { upload } = require('../controllers/avatarUploadController')
const { updateProfile } = require('../controllers/profileController')

const router = express.Router()

router.get('/:userId', getUserRules(), validator, getUser)

router.post('/register', userRegisterRules(), validator, register)

router.post('/login', userLoginRules(), validator, login)

router.post('/logout', logout)

router.post('/follow', checkAuthentication, followRules(), validator, follow)

router.post(
  '/unfollow',
  checkAuthentication,
  followRules(),
  validator,
  unfollow,
)

router.post('/check', checkUserRules(), validator, checkUserIsExists)

router.post(
  '/profile',
  checkAuthentication,
  upload.single('avatar'),
  updateProfile,
)

module.exports = router
