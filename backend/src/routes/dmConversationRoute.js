const express = require('express')
const {
  getConversations,
  createConversation,
} = require('../controllers/dmConversationController')

const router = express.Router()

router.get('/', getConversations)
router.post('/', createConversation)

module.exports = router
