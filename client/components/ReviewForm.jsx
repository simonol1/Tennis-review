import React from 'react'


class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
    <form className = 'main-form'>
      <input type='text' id='left-column' name='name' placeholder='Players name' />
      <input type='email'id='right-column' name='email' placeholder='Email' />
      <input type='tel' id='left-column'name='mobile' placeholder='Mobile number' />
      <input type='text' id='right-column'name='name' placeholder='Opponents name' />
      <input type='text' id='left-column'name='name' placeholder='Game score' />
      <input type='text' id='right-column' name='name' placeholder='Date' />
      <input type='text' id='review-details'name='name' placeholder='Your thoughts on the match' />
      <input type='submit' id='submit' value='Submit' />
    </form>
  )
  }
}



export default ReviewForm
