import { useEffect, useState } from 'react'
import { getGenres } from '../utils/getGenres'

export const useGetGenres = (ids) => {
  const [genres, setGenres] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const resp = await getGenres()
      const objGenres = ids.map((id) =>
        resp.genres.find((genre) => genre.id === id)
      )
      setGenres(objGenres.map((genre) => genre.name).join('/'))
      setLoading(false)
    }
    getData()
  }, [ids])

  return { genres, loading }
}
