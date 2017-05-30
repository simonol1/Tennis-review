import React from 'react'
import ReviewForm from './ReviewForm'
import {Link} from 'react-router-dom'
import Reviews from './Reviews'

import * as api from '../api'

export default class OldReviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
  }
}
componentDidMount() {
  api.getReviews((err, reviews) => {
    this.setState({reviews})
    })
}
render () {
  return (
    <div>
      <h1 className='page2-header'>Find a Review</h1>
    </div>
  )}
}
