const express = require('express')
const { sendMessage, getMessages } = require('../controllers/dmController')

const router = express.Router()

router.post('/', sendMessage)

router.get('/:conversation', getMessages)

module.exports = router
