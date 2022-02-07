require('dotenv').config()

const config = {
  port: process.env.port || '5000',
  DB_URI: process.env.DB_URI || 'mongodb://mongo:27017/twitter-clone',
}

module.exports = config
