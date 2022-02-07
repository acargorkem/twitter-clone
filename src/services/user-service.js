const BaseService = require('./base-service')
const UserModel = require('../models/user')
const {
  generateSaltAndHash,
  userToJSON,
  validatePassword
} = require('../lib/auth')

class UserService extends BaseService {
  model = UserModel

  register = async (req, res) => {
    const { username, password, email } = req.body
    const { salt, hash } = generateSaltAndHash(password)

    const user = await this.save({
      username,
      email,
      hash,
      salt
    })

    const safeUser = userToJSON(user._doc)

    res.status(201)
    res.json({ user: safeUser })
  }

  login = async (req, res) => {
    const { username, password } = req.body

    const user = await UserModel.findOne({ username }).select('+hash +salt')
    if (!user) {
      return res.status(422).json({ error: 'User not found' })
    }

    const isPasswordMatched = validatePassword(user, password)
    if (!isPasswordMatched) {
      return res.status(422).json({ error: 'Wrong password' })
    }

    const safeUser = userToJSON(user._doc)

    res.status(200)
    res.json({ user: safeUser })
  }
}

module.exports = new UserService()
