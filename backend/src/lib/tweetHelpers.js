const { union } = require('lodash')

const findHashtags = (text) => {
  const pattern = /(?:^|\s)#(?![0-9_]+\b)([a-zA-Z0-9_]{1,30})(\b|\r)/g
  const matches = text.match(pattern)
  if (!matches) return null
  let hashtags = matches.map((match) => match.trim().slice(1).toLowerCase())
  hashtags = union(hashtags)
  return hashtags
}

module.exports = { findHashtags }
