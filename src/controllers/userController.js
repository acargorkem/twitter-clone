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

  const safeUser = userToJSON(user._doc)

  res.status(201)
  res.json({ user: safeUser })
}

const follow = async (req, res) => {
  const followedUserId = req.body.followed
  const bothUsers = await UserService.follow(req.user.id, followedUserId)
  res.status(200).json(bothUsers)
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

module.exports = { register, follow, getUser }
