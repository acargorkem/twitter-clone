const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 2,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: { type: String },
    bio: { type: String },
    following: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    followers: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    hash: { type: String, select: false },
    salt: { type: String, select: false },
  },
  { timestamps: true },
)

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
