const BaseService = require('./baseService')
const TweetModel = require('../models/tweet')

class TweetService extends BaseService {
  model = TweetModel

  getTweetsFromFollowing = async (user) => {
    const tweets = await TweetModel.aggregate([
      { $match: { author: { $in: user.following } } },
    ])
    return tweets
  }
}

module.exports = new TweetService()
