import { movieApi } from '../api/movieApi'

export const getGenres = async () => {
  const resp = await movieApi.get('/genre/movie/list')
  return resp.data
}