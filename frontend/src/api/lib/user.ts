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

export async function getMe() {
  return axiosClient.get('/user/me')
}

export async function getUser(username: string) {
  return axiosClient.get(`user/status/${username}`)
}

export async function postUpdateUser(
  bio: string,
  name: string,
  images: Blob[],
) {
  const formData = new FormData()
  formData.append('bio', bio)
  formData.append('name', name)
  formData.append('avatar', images[0])

  return axiosClient.post('/user/profile', formData)
}

export async function postFollowUser(followedUserId: string) {
  return axiosClient.post('/user/follow', { followedUserId })
}

export async function postUnFollowUser(followedUserId: string) {
  return axiosClient.post('/user/unfollow', { followedUserId })
}
