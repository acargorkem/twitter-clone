const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const TweetSchema = new mongoose.Schema(
  {
    context: { type: String },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      autopopulate: { select: 'name username avatar', maxDepth: 1 },
    },
    medias: [{ type: String }],
    likes: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    replies: [{ type: mongoose.Schema.ObjectId, ref: 'Tweet' }],
    retweets: [{ type: mongoose.Schema.ObjectId, ref: 'Tweet' }],
    hashtags: [{ type: String }],
  },
  { timestamps: true },
)

TweetSchema.plugin(autopopulate)
const TweetModel = mongoose.model('Tweet', TweetSchema)

module.exports = TweetModel
