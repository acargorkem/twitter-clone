const findHashtags = (text) => {
  const pattern = /(^|\B)#(?![0-9_]+\b)([a-zA-Z0-9_]{1,30})(\b|\r)/g
  const matches = text.match(pattern)
  if (!matches) return null
  const hashtags = matches.map((match) => match.slice(1).toLowerCase())
  return hashtags
}
module.exports = { findHashtags }
