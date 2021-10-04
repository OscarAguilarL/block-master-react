import React from 'react'

import { MovieGridItem } from './MovieGridItem'

import '../assets/styles/MovieGrid.css'

export const MovieGrid = ({ movies }) => {
  return (
    <div className="movieGrid animate__animated animate__fadeIn animate__slow">
      {movies.map((movie) => (
        <MovieGridItem movie={movie} key={movie.id} />
      ))}
    </div>
  )
}
