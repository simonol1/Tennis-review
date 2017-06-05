import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
      <div className="navbar">
          <Link to={'/'}>Home</Link>
          <Link to={'/reviews'}>Write</Link>
          <Link to={'/reviewlist'}>Reviews</Link>
          <Link to={'#'}>Contact</Link>
      </div>
)}


export default Nav
