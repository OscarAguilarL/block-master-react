import React from 'react'

import { Link, NavLink } from 'react-router-dom'

import '../assets/styles/Navbar.css'
import logo from '../assets/img/logo-block-master.png'
import { Search } from './Search'

export const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <img src={logo} alt="Logo" width="67" height="40" />
      </Link>

      <button className="btn-hamburguer">
        <i className="icon-menu"></i>
      </button>

      <nav className="header-nav">
        <NavLink to="/all" activeClassName="navLink-active" className="navLink">
          Todas
        </NavLink>
        <NavLink to="/most-valued" activeClassName="navLink-active" className="navLink">
          Más valoradas
        </NavLink>
        <NavLink to="/less-valued" activeClassName="navLink-active" className="navLink">
          Menos valoradas
        </NavLink>
      </nav>

      <Search />
    </header>
  )
}
