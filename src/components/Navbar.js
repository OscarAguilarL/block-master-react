import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/all">Todas</NavLink>
        <NavLink to="/most-valued">Más valoradas</NavLink>
        <NavLink to="/less-valued">Menos valoradas</NavLink>
      </nav>
    </header>
  )
}
