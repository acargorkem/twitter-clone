import {
  createSlice,
  createAsyncThunk,
  isFulfilled,
  isRejected,
  isPending,
} from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { login, postUnFollowUser, register } from '../api/lib/user'
import Cookies from 'js-cookie'
import { getMe, postUpdateUser, postFollowUser } from '../api/lib/user'
import { IUser } from '../types/user.d'

const hasToken = Cookies.get('connect.sid') ? true : false

const user = {
  _id: '',
  username: '',
  email: '',
  avatar: '',
  following: [],
  followers: [],
  tweets: [],
  likedTweets: [],
  createdAt: '',
  updatedAt: '',
  __v: 0,
  bio: '',
  name: '',
}

interface userState {
  authUser: IUser
  isAuth: boolean
  isLoading: boolean
  hasError: boolean
}

const initialState: userState = {
  authUser: user,
  isAuth: hasToken,
  isLoading: false,
  hasError: false,
}

interface ValidationErrors {
  errorMessage: string
  field_errors: Record<string, string>
}

export const loginThunk = createAsyncThunk<
  IUser,
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

export const registerThunk = createAsyncThunk<
  IUser,
  { username: string; password: string; email: string },
  { rejectValue: ValidationErrors }
>('user/register', async (inputs, { rejectWithValue }) => {
  try {
    const { username, password, email } = inputs
    const result = await register(username, password, email)
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

export const getUserThunk = createAsyncThunk<
  IUser,
  null,
  { rejectValue: ValidationErrors }
>('user/me', async (_, { rejectWithValue }) => {
  try {
    const result = await getMe()
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

export const postUpdateUserThunk = createAsyncThunk<
  IUser,
  { bio: string; name: string; images: Blob[] },
  { rejectValue: ValidationErrors }
>('user/profile', async (inputs, { rejectWithValue }) => {
  try {
    const { bio, name, images } = inputs
    const result = await postUpdateUser(bio, name, images)
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
export const postFollowUserThunk = createAsyncThunk<
  IUser,
  { userID: string },
  { rejectValue: ValidationErrors }
>('user/follow', async (inputs, { rejectWithValue }) => {
  try {
    const { userID } = inputs
    const result = await postFollowUser(userID)
    return result.data.followingUser
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    const error: AxiosError<ValidationErrors> = err
    if (!error.response) {
      throw err
    }
    return rejectWithValue(error.response.data)
  }
})

export const postUnFollowUserThunk = createAsyncThunk<
  IUser,
  { userID: string },
  { rejectValue: ValidationErrors }
>('user/unfollow', async (inputs, { rejectWithValue }) => {
  try {
    const { userID } = inputs
    const result = await postUnFollowUser(userID)
    return result.data.followingUser
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
      Cookies.remove('connect.sid')
      state.isAuth = false
      state.authUser = user
    },
    changeAvatar: (state) => {
      state.authUser.avatar = user.avatar
    },
    clear: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isFulfilled(
          loginThunk,
          registerThunk,
          getUserThunk,
          postUpdateUserThunk,
          postFollowUserThunk,
          postUnFollowUserThunk,
        ),
        (state, { payload }) => {
          state.authUser = payload
          state.isAuth = true
          state.isLoading = false
        },
      )
      .addMatcher(
        isPending(
          loginThunk,
          registerThunk,
          getUserThunk,
          postUpdateUserThunk,
          postFollowUserThunk,
          postUnFollowUserThunk,
        ),
        (state) => {
          state.isLoading = true
        },
      )
      .addMatcher(
        isRejected(
          loginThunk,
          registerThunk,
          getUserThunk,
          postUpdateUserThunk,
          postFollowUserThunk,
          postUnFollowUserThunk,
        ),
        (state) => {
          state.isLoading = false
          state.hasError = true
        },
      )
  },
})

const { actions, reducer } = userSlicer
export const { clear, logout, changeAvatar } = actions
export default reducer
