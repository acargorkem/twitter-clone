const { validationResult } = require('express-validator')

const validator = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }))

  res.status(422)
  return res.json({
    errors: extractedErrors,
  })
}

module.exports = validator
