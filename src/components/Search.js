import React from 'react'

import '../assets/styles/Search.css'

export const Search = () => {
  return (
    <form className="searchForm">
      <input type="search" placeholder="Busca tu pelicula favorita..." className="search"/>
      <button type="submit" className="form-button">
        <i className="icon-search"></i>
      </button>
    </form>
  )
}
