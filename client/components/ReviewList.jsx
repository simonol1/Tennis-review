import React from 'react'
import {Link} from 'react-router-dom'

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
    api.getReviews((err, reviews) => {
      console.log({reviews});
      this.setState({reviews})
    })
}

renderReview(review) {
  return <li className="review-list">
    <h5 className="username">{review.name} V.S {review.opponent}</h5>
    <p className="content">Review: {review.content}</p>
    <p className="score">Score: {review.score}</p>
  </li>
}

renderReviews() {
  return this.state.reviews.map(this.renderReview)
}

render () {
  return (
    <span>
    <div className='row'>
      <div className='twelve columns'>
        <Link className='home' to='/'>HOME</Link>
      </div>
    </div>
    <div className='row'>
      <div className='twelve columns'>
        <h1 className='page2-header'>Find a Review</h1>
        <ul>
          {this.renderReviews()}
        </ul>
    </div>
  </div>
</span>
  )}
}

function mapStateToProps(state) {
  console.log(state);
  return {
    props:props.state
  }
}

export default connect(mapStateToProps)(ReviewList)
