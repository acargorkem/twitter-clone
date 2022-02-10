const express = require('express')
const TweetService = require('../services/tweetService')
const { tweetValidationRules } = require('../validations/tweet.validation')
const validator = require('../validations')

const router = express.Router()

router.post('/', tweetValidationRules(), validator, async (req, res) => {
  const tweetBody = req.body.tweet
  const tweet = {
    author: req.user.id,
    tweet: tweetBody,
  }

  const result = await TweetService.save(tweet)
  res.status(201).json({ result })
})

module.exports = router
