import React from 'react'

import {Link} from 'react-router-dom'



const Home = () => {
  return (
    <div className='home'>
      <h1><Link to='/Reviews'>Review My Tennis Match</Link></h1>
    </div>
  )
}

export default Home
