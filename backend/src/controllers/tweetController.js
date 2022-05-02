const TweetService = require('../services/tweetService')
const UserService = require('../services/userService')
const { findHashtags } = require('../lib/tweetHelpers')

const postTweet = async (req, res) => {
  const { files, body } = req
  const tweetBody = body.tweet

  const filenames = files.map(({ filename }) => `uploads/tweet/${filename}`)

  const hashtags = findHashtags(tweetBody)

  const tweet = {
    author: req.user.id,
    context: tweetBody,
    hashtags,
    medias: filenames,
  }

  const result = await TweetService.save(tweet)
  UserService.findByIdAndUpdate(req.user.id, { $push: { tweets: result.id } })
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

const getTweetsContainHashtag = async (req, res) => {
  const { hashtag } = req.params
  const result = await TweetService.getTweetsContainHashtag(hashtag)
  res.status(200)
  return res.json({ result })
}

module.exports = {
  postTweet,
  getAllTweets,
  getTweetsFromFollowing,
  getPopularHashtags,
  getTweetsContainHashtag,
}
