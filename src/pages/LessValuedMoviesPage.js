import React, { useEffect, useState } from 'react'

import '../assets/styles/Page.css'
import { Loading } from '../components/Loading'
import { MovieGrid } from '../components/MovieGrid'
import { getUnpopularMovies } from '../utils/getUnpopularMovies'

export const LessValuedMoviesPage = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const getData = async () => {
    const resp = await getUnpopularMovies()
    setMovies(
      resp.results.sort(
        (movie, nextMovie) => movie.vote_average - nextMovie.vote_average
      )
    )
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="moviePage">
      <h1>Peliculas menos valoradas</h1>
      {loading ? <Loading /> : <MovieGrid movies={movies} />}
    </div>
  )
}
