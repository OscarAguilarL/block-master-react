import React from 'react'

import '../assets/styles/Loading.css'
import loading from '../assets/loader.svg'

export const Loading = () => {
  return (
    <div className="spinner-loader">
      <img src={loading} alt="" />
    </div>
  )
}
