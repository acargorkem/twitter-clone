const DmService = require('../services/dmService')
const socketApi = require('../socketApi')

const sendMessage = async (req, res) => {
  const { content, conversation } = req.body
  const sender = req.user.id
  const message = {
    sender,
    content,
    conversation,
  }

  const result = await DmService.save(message)

  socketApi.emitMessageUpdates(conversation)

  res.status(200)
  return res.json({ result })
}

const getMessages = async (req, res) => {
  const { conversationId } = req.params
  const messages = await DmService.findAllBy('conversation', conversationId)

  if (messages.length <= 0) {
    res.status(404)
    return res.json({ error: 'No messages found.' })
  }

  res.status(200)
  return res.json({ messages })
}

module.exports = {
  sendMessage,
  getMessages,
}
