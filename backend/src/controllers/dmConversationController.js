const DmConversationService = require('../services/dmConversationService')

const getConversations = async (req, res) => {
  const conversations = await DmConversationService.findAllBy('members', {
    $in: [req.user.id],
  })

  res.status(200)
  return res.json({ conversations })
}

const createConversation = async (req, res) => {
  const senderId = req.user.id
  const { members } = req.body
  const allMembers = [...members, senderId]

  const existedConversation = await DmConversationService.getChatByMembers(
    allMembers,
  )

  if (existedConversation) {
    res.status(409)
    return res.json({ error: 'Conversation with these members already exists' })
  }

  const conversation = await DmConversationService.save({
    members: allMembers,
  })

  res.status(201)
  return res.json({ conversation })
}

module.exports = {
  getConversations,
  createConversation,
}
