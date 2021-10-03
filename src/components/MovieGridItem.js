import React from 'react'

import { image_url } from '../utils/constants'

import '../assets/styles/MovieGridItem.css'

export const MovieGridItem = ({ movie }) => {
  return (
    <button type="button" className="movie-image">
      <img src={image_url + movie.poster_path} alt={movie.original_title} />
    </button>
  )
}
