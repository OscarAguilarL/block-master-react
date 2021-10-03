import React from 'react'
import ReactDOM from 'react-dom'

import '../assets/styles/MovieModal.css'

export const MovieModal = ({ onClose, movie }) => {
  console.log(movie)

  return ReactDOM.createPortal(
    <div className="modal">
      <h1 onClick={onClose}>movieModal</h1>
    </div>,
    document.querySelector('#modal')
  )
}
