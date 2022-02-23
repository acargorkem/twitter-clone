const express = require('express')
const {
  postTweet,
  getAllTweets,
  getTweetsFromFollowing,
  getPopularHashtags,
} = require('../controllers/tweetController')
const { checkAuthentication } = require('../middlewares/auth')
const { tweetValidationRules } = require('../validations/tweet.validation')
const validator = require('../validations')

const router = express.Router()

router.post('/', tweetValidationRules(), validator, postTweet)

router.get('/', getAllTweets)

router.get('/following', checkAuthentication, getTweetsFromFollowing)

router.get('/hashtag', getPopularHashtags)

module.exports = router
