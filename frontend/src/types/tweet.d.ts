import { IUser } from './user'

export interface ITweet {
  tweet: string
  author: IUser
  likes: string[]
  replies: string[]
  retweets: string[]
  hashtags: string[] | null
  _id: string
  createdAt: string
  updatedAt: string
  __v: number
}
