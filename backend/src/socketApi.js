const socketIo = require('socket.io')

const io = socketIo()
const socketApi = {}

const origins = [] // TODO : Add domains on production
const options = {
  cors: {
    origin: process.env.NODE_ENV === 'production' ? origins : true,
    credentials: true,
  },
}

socketApi.io = io
socketApi.options = options

io.on('connection', (socket) => {
  socket.on('join-conversation', (conversationId) => {
    socket.join(conversationId)
    io.to(conversationId).emit('messages-updated')
  })
})

socketApi.emitMessageUpdates = (conversationId) => {
  io.to(conversationId).emit('messages-updated')
}

module.exports = socketApi
