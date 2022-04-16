import React, { useEffect, useState } from 'react'
import { getAllTweets } from '../../api/lib/tweet'
import TweetCard from '../tweetCard/TweetCard'
import { Container } from './Timeline.styled'
import { ITweet } from '../../types/tweet'
import AddTweet from '../addTweet/AddTweet'
import { Typography } from '@mui/material'

const Timeline: React.FC = () => {
  const [tweets, setTweets] = useState<ITweet[]>([])

  const getTweets = async () => {
    const result = await getAllTweets()
    setTweets(result.data.result)
  }

  useEffect(() => {
    getTweets()
  }, [])

  return (
    <Container>
      <Typography padding={'8px 16px'} variant="h6" color="text.secondary">
        Home
      </Typography>
      <AddTweet getTweets={getTweets} />
      {tweets.map((tweet) => {
        return <TweetCard key={tweet._id} tweet={tweet} />
      })}
    </Container>
  )
}

export default Timeline
