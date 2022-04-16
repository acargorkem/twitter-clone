import axiosClient from '../client'

export const getAllTweets = async () => {
  return axiosClient.get('/tweet')
}

export const postTweet = async (tweet: string) => {
  return axiosClient.post('/tweet', { tweet })
}
