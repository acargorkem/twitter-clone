const BaseService = require('./baseService')
const UserModel = require('../models/user')

class UserService extends BaseService {
  model = UserModel

  follow = async (followingId, followedId) => {
    const followingUser = await this.findById(followingId)
    const followedUser = await this.findById(followedId)

    followingUser.following.addToSet(followedId)
    followedUser.followers.addToSet(followingId)

    await followingUser.save()
    await followedUser.save()
    return { followingUser, followedUser }
  }
}
module.exports = new UserService()
