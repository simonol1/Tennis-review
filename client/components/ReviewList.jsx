import React from 'react'
import ReviewForm from './ReviewForm'
import {Link} from 'react-router-dom'
import Reviews from './Reviews'

import * as api from '../api'

export default class ReviewList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
  }
}
componentDidMount() {
  this.getReviewList()
}

getReviewList() {
    api.getReviews((reviews, error) => {
      if(error) {
        console.log(error);
      } else {
        this.setState({reviews})
      }
    })
}

render () {
  return (
    <div>
      <Link to='/'>Home</Link>
      <h1 className='page2-header'>Find a Review</h1>
    </div>
  )}
}
