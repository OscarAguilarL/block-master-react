import React from 'react'
import ReactDOM from 'react-dom'

import '../assets/styles/MovieModal.css'

export const MovieModal = ({ onClickFn, movie }) => {
  console.log(movie)

  return ReactDOM.createPortal(
    <div className="modal">
      <button type="button" onClick={() => onClickFn()}>
        movieModal
      </button>
    </div>,
    document.querySelector('#modal')
  )
}
