import React from 'react'

import api from '../api'

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      player: {
      name: '',
      email: '',
      mobile: ''
    },
    players: []
  }
}
handleSubmit(evt) {
  evt.preventDefault()
  api.saveReview(this.state.player, (err, player) => {
    if (!err) saveReview(player)
    else throw(err)
  })
}

saveReview (player) {
  let players = this.state.players
  players.push(player)
  this.setState({players})
  // this.props.location
}

componentDidMount() {
  api.getPlayers((err, players) => {
    this.setState({players})
    console.log(this.state);
  })
}


//call save review
//location -- react router. this.props.location = google for react touter set location redirect

  handleChange(evt) {
    console.log(evt.target.name, evt.target.value)
    let player = {...this.state.player}
    player[evt.target.name] = evt.target.value
    this.setState({player})
}

renderPlayerOptions() {
  return this.state.players.map((player) => {
    return <option value={player.name}>{player.name}</option>
  })
}

  render () {
    return (
    <form className = 'main-form' onSubmit={(evt) => this.handleSubmit(evt)}>
      <select onChange={evt => this.handleChange(evt)}>
        {this.renderPlayerOptions()}
      </select>
      <input type='email'id='right-column' name='email' placeholder='Email' onChange={evt => this.handleChange(evt)}/>
      <input type='tel' id='left-column'name='mobile' placeholder='Mobile number' onChange={evt => this.handleChange(evt)}/>
      <input type='text' id='right-column'name='name' placeholder='Opponents name' onChange={evt => this.handleChange(evt)}/>
      <input type='text' id='left-column'name='name' placeholder='Game score' onChange={evt => this.handleChange(evt)}/>
      <input type='text' id='right-column' name='name' placeholder='Date' onChange={evt => this.handleChange(evt)} />
      <input type='text' id='review-details'name='name' placeholder='Your thoughts on the match' onChange={evt => this.handleChange(evt)}/>
      <input type='submit' id='submit' value='Submit' />
    </form>
  )}
}



export default ReviewForm
