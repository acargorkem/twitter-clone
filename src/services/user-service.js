const BaseService = require('./base-service')
const UserModel = require('../models/user')
const { generateSaltAndHash, userToJSON } = require('../lib/auth')

class UserService extends BaseService {
  model = UserModel

  register = async (req, res) => {
    const { username, password, email } = req.body
    const { salt, hash } = generateSaltAndHash(password)

    const user = await this.save({
      username,
      email,
      hash,
      salt,
    })

    const safeUser = userToJSON(user._doc)

    res.status(201)
    res.json({ user: safeUser })
  }
}

module.exports = new UserService()
