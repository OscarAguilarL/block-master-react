import { movieApi } from '../api/movieApi'

export const getPopularMovies = async () => {
  const resp = await movieApi.get('/movie/top_rated')
  return resp.data
}
