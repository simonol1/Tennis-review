import React from 'react'

import api from '../api'
import PlayerForm from './PlayerForm'

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      review: {
        Opponent:'',
        Score:'',
        Reviewer:'',
        Content:''
      },
    review: []
  }
}
componentDidMount() {
  api.getReviews((err, reviews) => {
    this.setState({reviews})
  })
}

handleSubmit(evt) {
  evt.preventDefault()
  api.saveReview(this.state.review, (err, review) => {
    if (err) console.log({err});
    if (!err) this.refreshForm()
    else throw(err)
  })
}
refreshForm() {
  api.getReviews((reviews) => {
    this.setState({reviews})
  })
}

handleChange(evt) {
  let review = {...this.state.review}
  review[evt.target.name] = evt.target.value
  this.setState({review})
}



  render () {
    return (
    <form className = 'main-form' onSubmit={(evt) => this.handleSubmit(evt)}>
      <input type='text' id='column'name='name' placeholder='Opponents name' onChange={this.handleChange.bind(this)}/>
      <input type='text' id='column'name='name' placeholder='Game score' onChange={this.handleChange.bind(this)}/>
      <input type='text' id='column' name='name' placeholder='Date' onChange={this.handleChange.bind(this)}/>
      <input type='text' id='review-details'name='name' placeholder='Review' onChange={this.handleChange.bind(this)}/>
      <input type='submit' id='submit' value='Submit'/>
    </form>
  )}
}



export default ReviewForm
