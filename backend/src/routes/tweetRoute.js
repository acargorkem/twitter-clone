const express = require('express')
const {
  postTweet,
  getAllTweets,
  getTweetsFromFollowing,
  getPopularHashtags,
  getTweetsContainHashtag,
} = require('../controllers/tweetController')
const { upload } = require('../controllers/tweetMediaContoller')

const router = express.Router()

router.post('/', upload.array('medias', 4), postTweet)

router.get('/', getAllTweets)

router.get('/following', getTweetsFromFollowing)

router.get('/hashtag/:hashtag', getTweetsContainHashtag)

router.get('/hashtag', getPopularHashtags)

module.exports = router
