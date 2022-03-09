import { createSlice } from '@reduxjs/toolkit'

interface tweetState {
  tweet: string | null
  author: number | null
  likes: Array<object>
  replies: Array<object>
  retweets: Array<object>
  createdDate: Date | null
}

const initialState: tweetState = {
  tweet: null,
  author: null,
  likes: [],
  replies: [],
  retweets: [],
  createdDate: null,
}

export const tweetSlicer = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    setTest: (state, { payload }) => {
      state.tweet = payload
    },
    resetTest: () => initialState,
  },
})

const { actions, reducer } = tweetSlicer

export const { setTest, resetTest } = actions

export default reducer
