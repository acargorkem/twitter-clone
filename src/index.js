const express = require('express')
const helmet = require('helmet')

const config = require('./lib/config')
require('./lib/db-connection')

// Routes
const userRouter = require('./routes/user')

const app = express()
app.use(helmet())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/user', userRouter)

app.listen(config.port, () => {
  console.log(`App started on port ${config.port}`)
})
