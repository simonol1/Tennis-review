import React from 'react'

import {Link} from 'react-router-dom'
import Reviews from './Reviews'


const Home = () => {
  return (
    <div className='home-page'>
      <h1 className="main-heading"><Link to='/'>Review my Tennis Match</Link></h1>
        <div className='row'>
          <div className='four-columns'>
            </div>
              <div className='four-columns'>
               <button className='button1'><Link to='/reviewlist'>Find a review</Link></button>
               <button className='button2'><Link to='/reviews'>Write a review</Link></button>
              </div>
           <div className='four-columns'>
         </div>
      </div>
    </div>
  )}

export default Home
