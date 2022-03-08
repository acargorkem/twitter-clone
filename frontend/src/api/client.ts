import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:5000',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
