const express = require('express')
const { sendMessage, getMessages } = require('../controllers/dmController')

const router = express.Router()

router.post('/', sendMessage)

router.get('/:conversationId', getMessages)

module.exports = router
