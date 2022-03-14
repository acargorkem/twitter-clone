import axiosClient from '../client'

export async function checkUserExist(name: string) {
  return await axiosClient.post('/user/check', { username: name })
}
