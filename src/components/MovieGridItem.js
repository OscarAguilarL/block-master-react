import React, { useState } from 'react'

import '../assets/styles/MovieGridItem.css'
import { MovieModal } from './MovieModal'
import { MoviePoster } from './MoviePoster'

export const MovieGridItem = ({ movie }) => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <div className="movie" onClick={handleOpenModal}>
      <MoviePoster movie={movie} />
      {openModal && <MovieModal onClickFn={handleOpenModal} movie={movie} />}
    </div>
  )
}
