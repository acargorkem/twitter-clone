import axiosClient from '../client'

export const getAllTweets = async () => {
  return axiosClient.get('/tweet')
}

export const postTweet = async (context: string, images: Blob[]) => {
  const formData = new FormData()
  formData.append('tweet', context)
  images.forEach((image) => {
    formData.append('medias', image)
  })
  return axiosClient.post('/tweet', formData)
}
