import axiosClient from '../client'

export async function checkUserExist(name: string) {
  return axiosClient.post('/user/check', { username: name })
}
