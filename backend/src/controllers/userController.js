const passport = require('passport')
const UserService = require('../services/userService')
const { generateSaltAndHash, userToJSON } = require('../lib/auth')

const register = async (req, res) => {
  const { username, password, email } = req.body
  const { salt, hash } = generateSaltAndHash(password)

  const user = await UserService.save({
    username,
    email,
    hash,
    salt,
  })

  req.login(user, (err) => {
    if (err) {
      res.status(422)
      return res.json({ error: err.message })
    }
    const safeUser = userToJSON(user._doc)
    res.status(201)
    return res.json({ user: safeUser })
  })
}

const login = async (req, res, next) => {
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
}

const getUser = async (req, res) => {
  const userId = req.query.id
  const user = await UserService.findById(userId)
  if (!user) {
    res.status(404)
    return res.json({ error: 'User not found' })
  }
  res.status(200)
  return res.json({ user })
}

const follow = async (req, res) => {
  const { followedUserId } = req.body
  if (req.user.id === followedUserId) {
    res.status(422)
    return res.json({ error: `You can't follow yourself` })
  }

  const result = await UserService.follow(req.user.id, followedUserId)
  if (result.error) {
    res.status(400)
    return res.json(result)
  }
  res.status(200)
  return res.json(result)
}

const unfollow = async (req, res) => {
  const { followedUserId } = req.body

  const result = await UserService.unfollow(req.user.id, followedUserId)
  if (result.error) {
    res.status(400)
    return res.json(result)
  }
  res.status(200)
  return res.json(result)
}

const logout = async (req, res) => {
  req.logOut()
  res.status(200)
  return res.json({ message: 'Successfully logged out' })
}

module.exports = {
  register,
  login,
  getUser,
  follow,
  unfollow,
  logout,
}
