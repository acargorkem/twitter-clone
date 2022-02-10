const { generateSaltAndHash, userToJSON } = require('../lib/auth')
const UserService = require('../services/userService')

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

module.exports = { register }
