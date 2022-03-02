import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tweet: null,
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
