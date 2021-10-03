import React from 'react'

import { image_url } from '../utils/constants'

import '../assets/styles/MoviePoster.css'

export const MoviePoster = ({ movie }) => {
  return (
    <>
      <div className="movie-image">
        <img src={image_url + movie.poster_path} alt={movie.original_title} />
      </div>
      <div
        className={`card-rating border-${
          movie.vote_average > 5 ? 'primary' : 'secondary'
        }`}
      >
        <i className="icon-star"></i>
        <span>{movie.vote_average.toFixed(1)}</span>
      </div>
    </>
  )
}
