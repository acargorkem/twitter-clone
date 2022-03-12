const mongoose = require('mongoose')

const DmConversationSchema = new mongoose.Schema(
  {
    members: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  },
  { timestamps: true },
)

const DmConversationModel = mongoose.model(
  'DmConversation',
  DmConversationSchema,
)

module.exports = DmConversationModel
