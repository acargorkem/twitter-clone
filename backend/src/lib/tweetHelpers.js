const findHashtags = (text) => {
  const pattern = /(^|\B)#(?![0-9_]+\b)([a-zA-Z0-9_]{1,30})(\b|\r)/g
  return text.match(pattern)
}

module.exports = { findHashtags }
