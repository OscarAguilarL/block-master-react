import React, { useEffect, useState } from 'react'
import { image_url } from '../utils/constants'
import { getLatestMovies } from '../utils/getLatestMovies'

export const Slider = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const getData = async () => {
    const resp = await getLatestMovies()
    setMovies(resp.results.slice(0, 3))
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h3>Slider</h3>

      {!loading &&
        movies.map((movie) => (
          <img src={image_url + movie.poster_path} alt="" />
        ))}
    </div>
  )
}
