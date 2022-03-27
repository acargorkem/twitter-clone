const express = require('express')
const {
  getConversations,
  createConversation,
} = require('../controllers/dmConversationController')
const {
  createConversationRules,
} = require('../validations/conversationValidations')
const validator = require('../validations')

const router = express.Router()

router.get('/', getConversations)
router.post('/', createConversationRules(), validator, createConversation)

module.exports = router
