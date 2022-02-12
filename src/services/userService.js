const BaseService = require('./baseService')
const UserModel = require('../models/user')

class UserService extends BaseService {
  model = UserModel

  follow = async (followingId, followedId) => {
    const followingUser = await this.findById(followingId)
    const followedUser = await this.findById(followedId)

    if (!followingUser) {
      return { error: 'Following User not found' }
    }
    if (!followedUser) {
      return { error: 'Followed User not found' }
    }

    followingUser.following.addToSet(followedId)
    followedUser.followers.addToSet(followingId)

    await followingUser.save()
    await followedUser.save()
    return { followingUser, followedUser }
  }

  unfollow = async (followingId, followedId) => {
    const followingUser = await this.findById(followingId)
    const followedUser = await this.findById(followedId)

    if (!followingUser) {
      return { error: 'Following User not found' }
    }
    if (!followedUser) {
      return { error: 'Followed User not found' }
    }

    followingUser.following.pull(followedId)
    followedUser.followers.pull(followingId)

    await followingUser.save()
    await followedUser.save()
    return { followingUser, followedUser }
  }
}
module.exports = new UserService()
