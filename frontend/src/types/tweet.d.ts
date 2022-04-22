import { IUser } from './user'

export interface ITweet {
  context: string
  author: IUser
  likes: string[]
  replies: string[]
  retweets: string[]
  hashtags: string[] | null
  medias: string[]
  _id: string
  createdAt: string
  updatedAt: string
  __v: number
}
