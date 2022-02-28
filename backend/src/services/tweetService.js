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

  getPopularHashtags = async () => {
    const hashtags = await TweetModel.aggregate([
      {
        $unwind: {
          path: '$hashtags',
        },
      },
      {
        $group: {
          _id: '$hashtags',
          hashtags: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          hashtags: -1,
        },
      },
      {
        $limit: 5,
      },
      {
        $project: {
          hashtag: '$_id',
          count: '$hashtags',
          _id: false,
        },
      },
    ])
    return hashtags
  }

  getTweetsContainHashtag = async (hashtag) => {
    const tweets = await TweetModel.find({ hashtags: hashtag })
    return tweets
  }
}

module.exports = new TweetService()
