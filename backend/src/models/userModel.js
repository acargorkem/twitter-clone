const mongoose = require('mongoose')

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
      minlength: 2,
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

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
