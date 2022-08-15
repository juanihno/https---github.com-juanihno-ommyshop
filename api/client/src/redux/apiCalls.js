import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
} from './userRedux'
import { publicRequest } from '../requestMethods'
import { axiosInstance } from '../config'

export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await axiosInstance.post('/auth/login', user)
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure())
  }
}
export const logout = async (dispatch) => {
  const res = await axiosInstance.get('auth/logout')
  console.log('flag', res.data)
  dispatch(logoutSuccess(res.data))
}
