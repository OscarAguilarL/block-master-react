import React from 'react'
import ReactDOM from 'react-dom'

import { MoviePoster } from '../components/MoviePoster'

import '../assets/styles/MovieModal.css'
import { Button } from './Button'
import { useGetGenres } from '../hooks/useGetGenres'

export const MovieModal = ({ onClickFn, movie }) => {
  const { genres, loading } = useGetGenres(movie.genre_ids)

  return ReactDOM.createPortal(
    <div className="modal animate__animated animate__fadeIn animate__faster">
      <button type="button" className="modal-button" onClick={onClickFn}>
        <i className="icon-plus"></i>
      </button>
      <div className="modal-content">
        <div className="animate__animated animate__slideInLeft animate__faster">
          <div className="modal-poster">
            <MoviePoster movie={movie} />
          </div>
        </div>
        <div className="modal-description animate__animated animate__slideInRight animate__faster">
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
          <p className="caption">
            {!loading && <span>{genres}</span>}

            <span className="separator"></span>
            {movie.release_date && movie.release_date.slice(0, 4)}
          </p>
          <div className="modalButtons">
            <Button text="Ver después" iconType="plus" type="primary" />
            <Button text="Ver ahora" iconType="play" type="secondary" />
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}
