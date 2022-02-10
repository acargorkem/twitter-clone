const BaseService = require('./baseService')
const UserModel = require('../models/user')

class UserService extends BaseService {
  model = UserModel
}

module.exports = new UserService()
