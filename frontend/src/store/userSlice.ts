import { createSlice } from '@reduxjs/toolkit'

interface userState {
  name: string | null
  isExist: boolean
  isAuth: boolean
  isLoading: false
  hasError: false
}

const initialState: userState = {
  name: null,
  isExist: false,
  isAuth: false,
  isLoading: false,
  hasError: false,
}

export const userSlicer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clear: () => initialState,
    keepUser: (state, { payload }) => {
      state.name = payload
    },
  },
  extraReducers: {},
})

const { actions, reducer } = userSlicer
export const { clear, keepUser } = actions
export default reducer
