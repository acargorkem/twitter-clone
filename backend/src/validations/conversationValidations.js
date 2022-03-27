const { body } = require('express-validator')
const { uniq } = require('lodash')

const createConversationRules = () => [
  body('members').custom(async (value, { req }) => {
    const senderId = req.user.id
    const allMembers = [...value, senderId]

    if (uniq(allMembers).length !== allMembers.length) {
      return Promise.reject(
        new Error(`Request body 'members' has duplicated values.`),
      )
    }

    return true
  }),
]

module.exports = {
  createConversationRules,
}
