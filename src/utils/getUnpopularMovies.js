import { movieApi } from '../api/movieApi'

export const getUnpopularMovies = async () => {
  const resp = await movieApi.get('/discover/movie')
  return resp.data
}
