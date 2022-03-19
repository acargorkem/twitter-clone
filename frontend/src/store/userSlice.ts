import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { login } from '../api/lib/user'
interface userState {
  id: string | null
  isAuth: boolean
  isLoading: boolean
  hasError: boolean
}

const initialState: userState = {
  id: null,
  isAuth: false,
  isLoading: false,
  hasError: false,
}
export interface User {
  _id: string
  username: string
  email: string
  following: []
  followers: []
  tweets: []
  likedTweets: []
  createdAt: string
  updatedAt: string
  __v: number
}
interface ValidationErrors {
  errorMessage: string
  field_errors: Record<string, string>
}

export const loginThunk = createAsyncThunk<
  User,
  { username: string; password: string },
  { rejectValue: ValidationErrors }
>('user/login', async (inputs, { rejectWithValue }) => {
  try {
    const { username, password } = inputs
    const result = await login(username, password)
    return result.data.user
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    const error: AxiosError<ValidationErrors> = err
    if (!error.response) {
      throw err
    }
    return rejectWithValue(error.response.data)
  }
})

export const userSlicer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false
    },
    clear: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      state.isAuth = true
      state.id = payload._id
      state.isLoading = false
    })
    builder.addCase(loginThunk.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(loginThunk.rejected, (state) => {
      state.isLoading = false
      state.hasError = true
    })
  },
})

const { actions, reducer } = userSlicer
export const { clear, logout } = actions
export default reducer
