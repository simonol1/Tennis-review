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
componentDidMount() {
  api.getPlayers((err, players) => {
    this.setState({players})
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

// renderPlayerOptions() {
//   return this.state.players.map((player,i) => {
//     return <option key={i} value={player.name}>{player.name}</option>
//   })
// }
// <select onChange={evt => this.handleChange(evt)}>
//    {this.renderPlayerOptions()}
//    </select>
  render () {
    return (
    <form className = 'main-form' onSubmit={(evt) => this.handleSubmit(evt)}>
<<<<<<< HEAD
      <input type='text' id='column'name='name' placeholder='Player name' onChange={this.handleChange.bind(this)}/>
      <input type='text' id='column'name='name' placeholder='Opponents name' onChange={this.handleChange.bind(this)}/>
      <input type='text' id='column'name='name' placeholder='Game score' onChange={this.handleChange.bind(this)}/>
      <input type='text' id='column' name='name' placeholder='Date' onChange={this.handleChange.bind(this)}/>
      <textarea type='text' id='review-details' name='name' placeholder='Review' onChange={this.handleChange.bind(this)}></textarea>
=======
      <input type='text' id='column'name='Opponents name' placeholder='Opponents name' onChange={this.handleChange.bind(this)}/>
      <input type='text' id='column'name='Game score' placeholder='Game score' onChange={this.handleChange.bind(this)}/>
      <input type='text' id='column' name='Date' placeholder='Date' onChange={this.handleChange.bind(this)}/>
      <input type='text' id='column' name='Reviewer' placeholder='Reviewer name' onChange={this.handleChange.bind(this)}/>
      <input type='text' id='review-details'name='Review' placeholder='Review' onChange={this.handleChange.bind(this)}/>
>>>>>>> 101b168caf0fdcb9941f6dcf933cc5e0a81f273e
      <input type='submit' id='submit' value='Submit'/>
    </form>
  )}
}


export default ReviewForm
