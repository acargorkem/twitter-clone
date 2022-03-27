const express = require('express')
const {
  postTweet,
  getAllTweets,
  getTweetsFromFollowing,
  getPopularHashtags,
  getTweetsContainHashtag,
} = require('../controllers/tweetController')
const { tweetValidationRules } = require('../validations/tweetValidation')
const validator = require('../validations')

const router = express.Router()

router.post('/', tweetValidationRules(), validator, postTweet)

router.get('/', getAllTweets)

router.get('/following', getTweetsFromFollowing)

router.get('/hashtag/:hashtag', getTweetsContainHashtag)

router.get('/hashtag', getPopularHashtags)

module.exports = router
