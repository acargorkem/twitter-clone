const { createServer } = require('http')
const { Server } = require('socket.io')
const Client = require('socket.io-client')

describe('Socket implementation', () => {
  let io
  let serverSocket
  let clientSocket

  beforeAll((done) => {
    const httpServer = createServer()
    io = new Server(httpServer)
    httpServer.listen(() => {
      const { port } = httpServer.address()
      clientSocket = new Client(`http://localhost:${port}`)
      io.on('connection', (socket) => {
        serverSocket = socket
      })
      clientSocket.on('connect', done)
    })
  })

  afterAll(() => {
    io.close()
    clientSocket.close()
  })

  test('should emit world to hello group', (done) => {
    clientSocket.on('hello', (arg) => {
      expect(arg).toBe('world')
      done()
    })
    serverSocket.emit('hello', 'world')
  })

  test('should emit hola to hi group (with ack)', (done) => {
    serverSocket.on('hi', (cb) => {
      cb('hola')
    })
    clientSocket.emit('hi', (arg) => {
      expect(arg).toBe('hola')
      done()
    })
  })
})
