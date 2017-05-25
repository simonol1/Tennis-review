import React from 'react'

import ReviewForm from './ReviewForm'
import PlayerForm from './PlayerForm'


const Reviews= () => {
  return (
    <div className="row">
      <div className="four columns">
        <PlayerForm/>
      </div>
        <div className="four columns">
          <h1 className='page2-header'>Review a Match</h1>
       </div>
      <div className="four columns">
        <ReviewForm />
      </div>
  </div>
)}

export default Reviews
