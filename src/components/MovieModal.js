import React from 'react'
import ReactDOM from 'react-dom'

import { MoviePoster } from '../components/MoviePoster'

import '../assets/styles/MovieModal.css'

export const MovieModal = ({ onClickFn, movie }) => {
  console.log(movie)

  return ReactDOM.createPortal(
    <div className="modal">
      <button type="button" className="modal-button" onClick={onClickFn}>
        <i className="icon-plus"></i>
      </button>
      <div className="modal-content">
        <div className="modal-poster">
          <MoviePoster movie={movie} />
        </div>
        <div className="modal-description">
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
          <p className="caption">
            Crimen/Suspenso
            <span className="separator"></span>
            {movie.release_date.slice(0, 4)}
          </p>
          <div className="buttons">
            <button className="btn btn-primary">
              <i className="icon-plus"></i>
              <span>Ver después</span>
            </button>
            <button className="btn btn-secondary">
              <i className="icon-play"></i>
              <span>Ver ahora</span>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}
