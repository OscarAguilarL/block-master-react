import React from 'react'

import { image_url } from '../utils/constants'

import '../assets/styles/MovieGridItem.css'

export const MovieGridItem = ({ movie }) => {
  return (
    <div className="movie">
      <button type="button" className="movie-image">
        <img src={image_url + movie.poster_path} alt={movie.original_title} />
      </button>
      <div
        className={`card-rating border-${
          movie.vote_average > 5 ? 'primary' : 'secondary'
        }`}
      >
        <i className="icon-star"></i>
        <span>{movie.vote_average.toFixed(1)}</span>
      </div>
    </div>
  )
}
