const express = require('express')
const helmet = require('helmet')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')

// Routes
const userRouter = require('./routes/user')
const tweetRouter = require('./routes/tweet')

// Middlewares
const { checkAuthentication } = require('./middlewares/auth')

const config = require('./lib/config')
require('./lib/db-connection')
require('./strategies/local')

const app = express()
app.use(helmet())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: config.DB_URI,
    }),
  }),
)

app.use(passport.initialize())
app.use(passport.session())

app.use('/user', userRouter)
app.use('/tweet', checkAuthentication, tweetRouter)

app.listen(config.port, () => {
  console.log(`App started on port ${config.port}`)
})
