import axiosClient from '../client'

export const getAllTweets = async () => {
  return axiosClient.get('/tweet')
}
