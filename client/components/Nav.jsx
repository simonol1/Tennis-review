import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
      <div className="navbar">
          <Link to={'/'}>Home</Link>
          <Link to={'/reviews'}>Write a review</Link>
          <Link to={'/reviewlist'}>Review List</Link>
          <Link to={'#'}>Contact</Link>
      </div>
)}


export default Nav
