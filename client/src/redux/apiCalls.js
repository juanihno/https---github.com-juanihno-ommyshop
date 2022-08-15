import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
} from './userRedux'
import { publicRequest } from '../requestMethods'

export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await publicRequest.post('/auth/login', user)
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure())
  }
}
export const logout = async (dispatch) => {
  const res = await publicRequest.get('auth/logout')
  console.log('flag', res.data)
  dispatch(logoutSuccess(res.data))
}
