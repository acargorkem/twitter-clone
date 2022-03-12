const DmConversationModel = require('../models/dmConversationModel')
const BaseService = require('./baseService')

class DmConversationService extends BaseService {
  model = DmConversationModel

  getChatByMembers(members) {
    return DmConversationModel.findOne({
      members: { $size: members.length, $in: members },
    })
  }
}

module.exports = new DmConversationService()
