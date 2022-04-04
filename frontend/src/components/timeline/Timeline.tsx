import React, { useState } from 'react'
import { getAllTweets } from '../../api/lib/tweet'
import TweetCard from '../tweetCard/TweetCard'
import { Container } from './Timeline.styled'

const Timeline: React.FC = () => {
  const [tweets, setTweets] = useState<any>([])

  const onGetTweets = async () => {
    const result = await getAllTweets()
    setTweets(result.data.result)
  }
  return (
    <Container>
      <TweetCard />
      <TweetCard />
      <TweetCard />
      <TweetCard />
      <TweetCard />
      <TweetCard />
    </Container>
  )
}

export default Timeline
