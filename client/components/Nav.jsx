import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
      <div className="navbar">
          <Link to={'/'}>Home</Link>
          <Link to={'/reviews'}>Write a review</Link>
          <Link to={'/reviewlist'}>Add a Recipe!</Link>
          <Link to={'#'}>Contact</Link>
      </div>
)}


export default Nav
