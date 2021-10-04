import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import { MoviePoster } from '../components/MoviePoster'

import '../assets/styles/MovieModal.css'
import { getGenres } from '../utils/getGenres'
import { Button } from './Button'

export const MovieModal = ({ onClickFn, movie }) => {
  // const [movieGender, setMovieGender] = useState([])
  const [genres, setGenres] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    const resp = await getGenres()
    setGenres(resp.genres)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [movie])

  if (!loading) {
    console.log(genres)
    console.log(movie)
  }

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
            Crimen/Suspenso
            <span className="separator"></span>
            {movie.release_date.slice(0, 4)}
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
