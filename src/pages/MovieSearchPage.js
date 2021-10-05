import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import queryString from 'query-string'

import '../assets/styles/Page.css'
import noSearchFound from '../assets/img/search-not-found.png'

import { getMovieSearch } from '../utils/getMovieSearch'
import { Loading } from '../components/Loading'
import { MovieGrid } from '../components/MovieGrid'

export const MovieSearchPage = () => {
  const [searchResp, setSearchResp] = useState([])
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)

  useEffect(() => {
    const getData = async () => {
      const resp = await getMovieSearch(decodeURI(q))
      setSearchResp(resp.results)
      setLoading(false)
    }
    getData()
  }, [q])

  return (
    <div className="moviePage searchPage">
      {searchResp.length === 0 ? (
        <h1>No se encontraron resultados para: "{decodeURI(q)}"</h1>
      ) : (
        <h1>Resultados de búsqueda</h1>
      )}
      {loading ? (
        <Loading />
      ) : searchResp.length === 0 ? (
        <div className="imgContainer">
          <img src={noSearchFound} alt="Search not found" />
        </div>
      ) : (
        <MovieGrid movies={searchResp} />
      )}
    </div>
  )
}
