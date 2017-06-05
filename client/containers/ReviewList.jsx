import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import getReviews from '../action-creators/GetReviews'
import Header from '../components/Header'
import Footer from '../components/Footer'

class ReviewList extends React.Component {
componentDidMount() {
  this.props.dispatch(getReviews())
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
    <Header/>
        <ul>
          {this.renderReviews()}
        </ul>
    <Footer/>
</span>
  )}
}

function mapStateToProps(dispatch, ownProps) {
  return {
     getReviews: () => {
       dispatch(getReviews())
     }
  }
}

export default connect(mapStateToProps)(ReviewList)
