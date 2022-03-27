import axios from 'axios'
import baseConfig from '../utils/baseConfig'

export default axios.create({
  baseURL: baseConfig.baseURL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
  timeout: 1000 * 10,
})
