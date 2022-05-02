import React from 'react'
import { IUser } from '../../types/user'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import TweetCard from '../tweetCard/TweetCard'
import { ITweet } from '../../types/tweet'

interface TabPanelProps {
  children?: React.ReactNode
  dir?: string
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

interface IProps {
  user?: IUser
}

const ProfileTabs: React.FC<IProps> = ({ user }) => {
  const [tabValue, setTabValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  //TODO: Use Memo
  const filterMediaTweetArray = (tweets: ITweet[]) => {
    return tweets.filter((tweet) => tweet.medias.length > 0)
  }

  const renderTweets = (tweets: ITweet[]) => {
    return tweets.map((tweet) => {
      return <TweetCard key={tweet._id} tweet={tweet} />
    })
  }

  return (
    <Box>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Tweets" />
        <Tab label="Tweets&Replies" />
        <Tab label="Media" />
        <Tab label="Likes" />
      </Tabs>

      <Box>
        <TabPanel value={tabValue} index={0}>
          {user && renderTweets(user.tweets)}
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          Tweets&Replies
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          {user && renderTweets(filterMediaTweetArray(user.tweets))}
        </TabPanel>
        <TabPanel value={tabValue} index={3}>
          Likes
        </TabPanel>
      </Box>
    </Box>
  )
}

export default ProfileTabs
