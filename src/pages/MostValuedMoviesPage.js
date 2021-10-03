import React, { useEffect, useState } from 'react'

import '../assets/styles/Page.css'
import { Loading } from '../components/Loading'
import { MovieGrid } from '../components/MovieGrid'
import { getPopularMovies } from '../utils/getPopularMovies'

export const MostValuedMoviesPage = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const getData = async () => {
    const resp = await getPopularMovies()
    setMovies(resp.results)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="moviePage">
      <h1>Peliculas más valoradas</h1>
      {loading ? <Loading /> : <MovieGrid movies={movies} />}
    </div>
  )
}
