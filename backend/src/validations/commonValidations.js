const mongoose = require('mongoose')

const validateMongooseId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return Promise.reject(new Error('Not valid user id.'))
  }
  return true
}

module.exports = {
  validateMongooseId,
}
