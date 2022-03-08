const mongoose = require('mongoose')

const TweetSchema = new mongoose.Schema(
  {
    tweet: { type: String },
    author: { type: mongoose.Schema.ObjectId, ref: 'User' },
    likes: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    replies: [{ type: mongoose.Schema.ObjectId, ref: 'Tweet' }],
    retweets: [{ type: mongoose.Schema.ObjectId, ref: 'Tweet' }],
    hashtags: [{ type: String }],
  },
  { timestamps: true },
)

const TweetModel = mongoose.model('Tweet', TweetSchema)

module.exports = TweetModel
