import React, { useEffect, useState } from 'react'

import '../assets/styles/Page.css'
import { Loading } from '../components/Loading'
import { MovieGrid } from '../components/MovieGrid'
import { getLatestMovies } from '../utils/getLatestMovies'

export const AllMoviesPage = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const getData = async () => {
    const resp = await getLatestMovies()
    setMovies(resp.results)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  if (!loading) {
    console.log(movies)
  }

  return (
    <div className="moviePage">
      <h1>Todas las peliculas</h1>
      {loading ? <Loading /> : <MovieGrid movies={movies} />}
    </div>
  )
}
