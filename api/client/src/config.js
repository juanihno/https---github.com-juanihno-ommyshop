import axios from 'axios'
export const axiosInstance = axios.create({
  baseURL: 'https://ommy-surf.herokuapp.com/api/',
})
