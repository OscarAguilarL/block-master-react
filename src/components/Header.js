import React from 'react'

import { Link, NavLink } from 'react-router-dom'

import '../assets/styles/Navbar.css'
import logo from '../assets/img/logo-block-master.png'
import { Search } from './Search'
import { useToggle } from '../hooks/useToggle'

export const Header = () => {
  const { toggleValue, toggle, handleNavLinkClick } = useToggle(false)

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <img src={logo} alt="Logo" width="67" height="40" />
      </Link>

      <button
        className={`hamburger hamburger--spin btn-hamburguer ${
          toggleValue && 'is-active'
        }`}
        type="button"
        onClick={toggle}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <nav className={`header-nav ${toggleValue && 'is-open'}`}>
        <NavLink
          to="/all"
          onClick={handleNavLinkClick}
          activeClassName="navLink-active"
          className="navLink"
        >
          Todas
        </NavLink>
        <NavLink
          to="/most-valued"
          onClick={handleNavLinkClick}
          activeClassName="navLink-active"
          className="navLink"
        >
          Más valoradas
        </NavLink>
        <NavLink
          to="/less-valued"
          onClick={handleNavLinkClick}
          activeClassName="navLink-active"
          className="navLink"
        >
          Menos valoradas
        </NavLink>
      </nav>

      <Search />
    </header>
  )
}
