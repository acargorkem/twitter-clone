import axiosClient from '../client'

export async function checkUserExist(username: string) {
  return axiosClient.post('/user/check', { username })
}

export async function login(username: string, password: string) {
  return axiosClient.post('/user/login', { username, password })
}
