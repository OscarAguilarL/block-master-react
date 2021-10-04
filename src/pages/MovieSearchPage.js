import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import queryString from 'query-string'

import '../assets/styles/Page.css'
import { getMovieSearch } from '../utils/getMovieSearch'
import { Loading } from '../components/Loading'
import { MovieGrid } from '../components/MovieGrid'

export const MovieSearchPage = () => {
  const [searchResp, setSearchResp] = useState([])
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)

  const getData = async () => {
    const resp = await getMovieSearch(encodeURI(q))
    setSearchResp(resp.results)
    setLoading(false)
  }

  useEffect(() => getData(), [])

  return (
    <div className="moviePage">
      <h1>Resultados de búsqueda</h1>
      {loading ? <Loading /> : <MovieGrid movies={searchResp} />}
    </div>
  )
}
