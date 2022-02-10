const BaseService = require('./baseService')
const TweetModel = require('../models/tweet')

class TweetService extends BaseService {
  model = TweetModel
}

module.exports = new TweetService()
