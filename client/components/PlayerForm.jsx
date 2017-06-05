import React from 'react'

import api from '../api'

export default class PlayerForm extends React.Component {

  showAddPlayer () {
    this.setState({
      addPlayerVisible: true
    })
  }

  addPlayer(player) {
    api.addPlayer (player, (error) => {
      error ? this.setState({error}) : this.refreshForm()
    })
  }

  hideAddPlayer () {
    this.setState({ addPlayerVisible: false})
  }

  render () {
    return (
      <form className='player-form'>
        <input type='text' id='column' name='name' placeholder='Name' />
        <input type='text' id='column' name='email' placeholder='Email' />
        <input type='text' id='column' name='mobile' placeholder='Mobile' />
        <input type='submit' id='submit' value='Submit'/>
        <a href="#" id='cancelplayer' onClick={this.props.cancelCallback}>Cancel</a>
      </form>
    )
  }
}
