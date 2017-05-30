import React from 'react'

import api from '../api'
import PlayerForm from './PlayerForm'

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        player_id: null,
        opponent:null,
        score:null,
        content:null
    }
  }

    handleSubmit(evt) {
      evt.preventDefault()
      api.addReview(this.state, (err, review) => {
        if (err) console.log({err, review});
        else this.refreshForm()
      })
    }

    refreshForm() {
      api.getReviews((reviews) => {
        this.setState({reviews})
      })
    }

    handleChange(evt) {
      evt.preventDefault()
      this.setState({
        [evt.target.name]: evt.target.value
      })
    }

    renderPlayerOptions(players) {
      return players.map((player,i) => {
        return <option key={i} value={player.id}>{player.name}</option>
      })
    }

  render () {
    console.log(this.state);
    console.log(this.props);
    return (
    <form className = 'main-form' onSubmit={(evt) => this.handleSubmit(evt)}>
      <select name="player_id" onChange={evt => this.handleChange(evt)}>
          <option selected disabled>Pick a player</option>
         {this.renderPlayerOptions(this.props.players)}
      </select>
      <input type='text' id='column'name='opponent' placeholder='Opponents name' onChange={this.handleChange.bind(this)}/>
      <input type='text' id='column'name='score' placeholder='Game score' onChange={this.handleChange.bind(this)}/>
      <textarea type='text' id='review-details' name='content' placeholder='Review' onChange={this.handleChange.bind(this)}></textarea>
      <input type='submit' id='submit' value='Submit'/>
      <a href="#" id='cancel' onClick={this.props.cancelCallback}>Cancel</a>
    </form>
  )}
}
