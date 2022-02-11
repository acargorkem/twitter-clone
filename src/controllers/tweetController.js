const TweetService = require('../services/tweetService')

const postTweet = async (req, res) => {
  const tweetBody = req.body.tweet
  const tweet = {
    author: req.user.id,
    tweet: tweetBody,
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

module.exports = { postTweet, getAllTweets }
