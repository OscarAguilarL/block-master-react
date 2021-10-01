import { movieApi } from '../api/movieApi'

export const getLatestMovies = async () => {
  const resp = await movieApi.get('/trending/movie/week')
  return resp.data
}
