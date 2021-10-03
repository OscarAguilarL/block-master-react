import React from 'react'

import { MovieGridItem } from './MovieGridItem'

import '../assets/styles/MovieGrid.css'

export const MovieGrid = ({ movies }) => {
  return (
    <div className="movieGrid">
      {movies.map((movie) => (
        <MovieGridItem movie={movie} key={movie.id} />
      ))}
    </div>
  )
}
