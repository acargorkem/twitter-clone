const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 2,
      unique: true,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: { type: String, default: '' },
    bio: { type: String },
    following: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    followers: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    hash: { type: String, select: false },
    salt: { type: String, select: false },
    tweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet',
        autopopulate: {
          maxDepth: 1,
          options: { sort: { createdAt: -1 } },
        },
      },
    ],
    likedTweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet',
      },
    ],
  },
  { timestamps: true },
)

UserSchema.plugin(autopopulate)
const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
