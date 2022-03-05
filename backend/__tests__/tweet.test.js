const { findHashtags } = require('../src/lib/tweetHelpers')

const tweet = `
#Lorem #ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore #magna aliqua. 
Eget mi proin sed #libero enim sed. Gravida dictum fusce ut placerat.
`

const tweetWithDuplicateHashtags = `#Lorem #ipsum dolor sit amet.
#Lorem #ipsum dolor sit amet. #Lorem #ipsum dolor sit amet.`

const tweetWithAnchorLinks = `http://localhost:3000/#hashtag`

it('Should find valid hashtags', () => {
  const hashtags = findHashtags(tweet)
  const expectedHashtags = ['lorem', 'ipsum', 'magna', 'libero']
  expect(hashtags).toEqual(expectedHashtags)
})

it('Should not find any valid hashtags in anchor links', () => {
  const hashtags = findHashtags(tweetWithAnchorLinks)
  expect(hashtags).toEqual(null)
})

it('Should remove duplicates on hashtags array', () => {
  const hashtags = findHashtags(tweetWithDuplicateHashtags)
  const expectedHashtags = ['lorem', 'ipsum']
  expect(hashtags).toEqual(expectedHashtags)
})
