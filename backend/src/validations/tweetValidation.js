const { body } = require('express-validator')

const tweetValidationRules = () => [
  body('tweet', 'Tweets need to 1 character at least.')
    .isString()
    .trim()
    .isLength({ min: 1 }),
]

module.exports = { tweetValidationRules }
