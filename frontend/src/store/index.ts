import { configureStore } from '@reduxjs/toolkit'
import tweetSlicer from './tweetSlice'
import userSlicer from './userSlice'

// ...

const store = configureStore({
  reducer: {
    tweet: tweetSlicer,
    user: userSlicer,
  },

  // devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
