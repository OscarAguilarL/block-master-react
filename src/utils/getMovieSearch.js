import { movieApi } from '../api/movieApi'

export const getMovieSearch = async (query) => {
  const resp = await movieApi.get('/search/movie', {
    params: {
      query,
    },
  })
  return resp.data
}
