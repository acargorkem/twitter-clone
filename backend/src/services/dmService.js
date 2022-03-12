const DmModel = require('../models/dmModel')
const BaseService = require('./baseService')

class DmService extends BaseService {
  model = DmModel
}

module.exports = new DmService()
