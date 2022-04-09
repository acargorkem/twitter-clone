export interface IUser {
  _id: string
  username: string
  email: string
  following: string[]
  followers: string[]
  tweets: string[]
  likedTweets: string[]
  createdAt: string
  updatedAt: string
  __v: number
}
