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

module.exports = { register, follow }
