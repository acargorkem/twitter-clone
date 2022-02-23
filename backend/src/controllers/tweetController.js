const TweetService = require('../services/tweetService')
const { findHashtags } = require('../lib/tweetHelpers')

const postTweet = async (req, res) => {
  const tweetBody = req.body.tweet
  const hashtags = findHashtags(tweetBody)
  const tweet = {
    author: req.user.id,
    tweet: tweetBody,
    hashtags,
  }

  const result = await TweetService.save(tweet)
  res.status(201)
  return res.json({ result })
}

const getAllTweets = async (req, res) => {
  const result = await TweetService.findAll({ sort: { createdAt: -1 } })
  res.status(200)
  return res.json({ result })
}

const getTweetsFromFollowing = async (req, res) => {
  const result = await TweetService.getTweetsFromFollowing(req.user)
  res.status(200)
  return res.json({ result })
}

const getPopularHashtags = async (req, res) => {
  const result = await TweetService.getPopularHashtags()
  res.status(200)
  return res.json({ result })
}

module.exports = {
  postTweet,
  getAllTweets,
  getTweetsFromFollowing,
  getPopularHashtags,
}
