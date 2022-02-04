const express = require('express')
const helmet = require('helmet')

const config = require('./lib/config')
require('./lib/db-connection')

const app = express()
app.use(helmet())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', (req, res, next) => {
  res.status(200).json({
    message: 'hello world'
  })
})

app.listen(config.port, () => {
  console.log('app started')
})
