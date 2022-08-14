import {
  addUsersFailure,
  addUsersStart,
  addUsersSuccess,
  deleteUsersFailure,
  deleteUsersStart,
  deleteUsersSuccess,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
  loginFailure,
  loginStart,
  loginSuccess,
  updateUsersFailure,
  updateUsersStart,
  updateUsersSuccess,
} from './userRedux'
import { publicRequest, userRequest } from '../requestMethods'
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from './productRedux'

export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await publicRequest.post('/auth/login', user)
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure())
  }
}
export const logout = async(dispatch)=>{
  const res = await publicRequest.get("auth/logout");
  console.log("flag",res.data);
  dispatch(logoutSuccess(res.data));
}
export const getProducts = async (dispatch) => {
  dispatch(getProductStart())
  try {
    const res = await publicRequest.get('/products')
    dispatch(getProductSuccess(res.data))
  } catch (err) {
    dispatch(getProductFailure())
  }
}

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart())
  try {
    const res = await userRequest.delete(`/products/${id}`)
    dispatch(deleteProductSuccess(id))
  } catch (err) {
    dispatch(deleteProductFailure())
  }
}

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart())
  try {
    // update
    //const res=await userRequest.patch(`/products/find/${id}`,product)

    const res = await userRequest.put(`/products/${id}`, product)

    dispatch(updateProductSuccess({ id, product }))
  } catch (err) {
    dispatch(updateProductFailure())
  }
}
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart())
  try {
    const res = await userRequest.post(`/products`, product)
    dispatch(addProductSuccess(res.data))
    return res.data
  } catch (err) {
    dispatch(addProductFailure())
  }
}

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart())
  try {
    const res = await userRequest.get('/users')
    dispatch(getUsersSuccess(res.data))
  } catch (err) {
    dispatch(getUsersFailure())
  }
}

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUsersStart())
  try {
    const res = await userRequest.delete(`/users/${id}`)
    dispatch(deleteUsersSuccess(id))
  } catch (err) {
    dispatch(deleteUsersFailure())
  }
}

export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUsersStart())
  try {
    // update
    //const res=await userRequest.patch(`/products/find/${id}`,product)

    const res = await userRequest.put(`/users/${id}`, user)

    dispatch(updateUsersSuccess({ id, user }))
  } catch (err) {
    dispatch(updateUsersFailure())
  }
}
export const addUser = async (user, dispatch) => {
  dispatch(addUsersStart())
  try {
    const res = await publicRequest.post('/auth/register', user)
    dispatch(addUsersSuccess(res.data))
  } catch (err) {
    dispatch(addUsersFailure())
  }
}
