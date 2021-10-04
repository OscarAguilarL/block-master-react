import React from 'react'
import { withRouter } from 'react-router'

import '../assets/styles/Search.css'
import { useForm } from '../hooks/useForm'

const Search = ({ history }) => {
  const [{ searchTerm }, handleInputChange] = useForm({
    searchTerm: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/search?q=${encodeURI(searchTerm)}`)
  }

  return (
    <form className="searchForm" autoComplete="off" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Busca tu pelicula favorita..."
        className="search"
        name="searchTerm"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit" className="form-button">
        <i className="icon-search"></i>
      </button>
    </form>
  )
}

export default withRouter(Search)
