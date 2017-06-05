import React from 'react'

import api from '../api'
import PlayerForm from './PlayerForm'

export default class ReviewForm extends React.Component {

    renderPlayerOptions(players) {
      return players.map((player,i) => {
        return <option key={i} value={player.id}>{player.name}</option>
      })
    }

  render () {
    return (
    <form className = 'main-form'>
      <select name="player_id">
        <option defaultValue>Pick a player</option>{this.renderPlayerOptions(this.props.players)}
      </select>
      <input type='text' id='column'name='opponent' placeholder='Opponents name' />
      <input type='text' id='column'name='score' placeholder='Game score' />
      <textarea type='text' id='review-details' name='content' placeholder='Review'></textarea>
      <input type='submit' id='submit' value='Submit'/>
      <a href="#" id='cancelreview' onClick={this.props.cancelCallback}>Cancel</a>
    </form>
  )}
}
