import React from 'react'

import '../assets/styles/Button.css'

export const Button = ({ type = 'primary', text, iconType = 'play' }) => {
  return (
    <button className={`btn btn-${type}`} type="button">
      <i className={`icon-${iconType}`}></i>
      <span>{text}</span>
    </button>
  )
}
