const mongoose = require('mongoose')

const DmSchema = new mongoose.Schema(
  {
    sender: { type: mongoose.Schema.ObjectId, ref: 'User' },
    content: { type: String },
    conversation: { type: mongoose.Schema.ObjectId, ref: 'DmConversation' },
  },
  { timestamps: true },
)

const DmModel = mongoose.model('Dm', DmSchema)

module.exports = DmModel
