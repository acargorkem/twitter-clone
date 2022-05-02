import { ITweet } from './tweet'

export interface IUser {
  _id: string
  avatar: string
  name: string
  bio: string
  username: string
  email: string
  following: string[]
  followers: string[]
  tweets: ITweet[]
  likedTweets: string[]
  createdAt: string
  updatedAt: string
  __v: number
}
