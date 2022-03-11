import axiosClient from '../client'

export async function checkUserExist(body: object) {
  return await axiosClient.post('/user/check', body)
}
