import axios from 'axios'
import { api_key, url } from '../utils/constants'

export const movieApi = axios.create({
  baseURL: url,
  params: {
    api_key,
    'language': 'es'
  },
})
