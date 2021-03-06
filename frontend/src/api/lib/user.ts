import axiosClient from '../client'

export async function checkUserExist(username: string) {
  return axiosClient.post('/user/check', { username })
}

export async function login(username: string, password: string) {
  return axiosClient.post('/user/login', { username, password })
}

export async function register(
  username: string,
  password: string,
  email: string,
) {
  return axiosClient.post('/user/register', { username, password, email })
}

export async function getUser() {
  return axiosClient.get('/user/me')
}
