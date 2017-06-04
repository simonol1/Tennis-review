import React from 'react'

import api from '../api'
import PlayerForm from './PlayerForm'

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        player_id: {},
        opponent:{},
        score:{},
        content:{}
    }
  }

    handleSubmit(evt) {
      evt.preventDefault()
      api.addReview(this.state, (err, review) => {
        window.location.reload(true)
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
    return (
    <form className = 'main-form' onSubmit={(evt) => this.handleSubmit(evt)}>
      <select name="player_id" onChange={evt => this.handleChange(evt)}>
          <option defaultValue>Pick a player</option>
         {this.renderPlayerOptions(this.props.players)}
      </select>
      <input type='text' id='column'name='opponent' placeholder='Opponents name' onChange={this.handleChange.bind(this)}/>
      <input type='text' id='column'name='score' placeholder='Game score' onChange={this.handleChange.bind(this)}/>
      <textarea type='text' id='review-details' name='content' placeholder='Review' onChange={this.handleChange.bind(this)}></textarea>
      <input type='submit' id='submit' value='Submit'/>
      <a href="#" id='cancelreview' onClick={this.props.cancelCallback}>Cancel</a>
    </form>
  )}
}
