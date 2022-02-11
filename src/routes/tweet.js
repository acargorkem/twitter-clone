const express = require('express')
const { postTweet, getAllTweets } = require('../controllers/tweetController')
const { tweetValidationRules } = require('../validations/tweet.validation')
const validator = require('../validations')

const router = express.Router()

router.post('/', tweetValidationRules(), validator, postTweet)

router.get('/', getAllTweets)

module.exports = router
