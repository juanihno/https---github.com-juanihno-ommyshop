import { createSlice } from '@reduxjs/toolkit'
const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    isLoggedin: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    loginSuccess: (state, action) => {
      state.isFetching = false
      state.currentUser = action.payload
      state.isLoggedin = true
      state.error = false
    },
    loginFailure: (state) => {
      state.isFetching = false
      state.error = true
    },
    logoutSuccess: (state, action) => {
      state.isLoggedin = action.payload
      state.currentUser = null
      state.error = false
      // localStorage.clear();
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, logoutSuccess } =
  userSlice.actions
export default userSlice.reducer
