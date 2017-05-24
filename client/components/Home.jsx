import React from 'react'

import {Link} from 'react-router-dom'
import Reviews from './Reviews'



const Home = () => {
  return (
    <div className='home'>
      <h1 className="main-heading"><Link to='/Reviews'>Review my Tennis Match</Link></h1>
        <div className='row'>
          <div className='four-columns'>
            </div>
              <div className='four-columns'>
               <button className='button1'>Find a review</button>
               <button className='button2'>Write a review</button>
              </div>
           <div className='four-columns'>
         </div>
      </div>
    </div>
  )
}

export default Home
