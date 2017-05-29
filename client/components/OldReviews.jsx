import React from 'react'
import ReviewForm from './ReviewForm'
import {Link} from 'react-router-dom'


export default class OldReviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      reviews: null
  }
}
componentDidMount() {
  api.getReviews((err, reviews) => {
    this.setState({reviews})
    })
}
render ()
  return (
    <div>
    <h1 className='page2-header'>Find a Review</h1>
    <Reviews />
    </div>
  )
}
