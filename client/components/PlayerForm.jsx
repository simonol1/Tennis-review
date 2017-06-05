import React from 'react'

import api from '../api'

export default PlayerForm = (props) => {

  handleSubmit(evt) {
    evt.preventDefault()
    api.addPlayer(this.state.player, (err, player) => {
      window.location.reload(true)
    })
  }

  handleChange(evt) {
    let player = {...this.state.player}
      player[evt.target.name] = evt.target.value
      this.setState({player})
  }

  render () {
    return (
      <div className="add-player">
        <form className = 'player-form' onSubmit={(evt) => this.handleSubmit(evt)}>
             <input type='text' id='column'name='name' placeholder='Name' onChange={this.handleChange.bind(this)}/>
             <input type='text' id='column'name='email' placeholder='Email' onChange={this.handleChange.bind(this)}/>
             <input type='text' id='column'name='mobile' placeholder='Mobile' onChange={this.handleChange.bind(this)}/>
             <input type='submit' id='submit' value='Submit'/>
             <a href="#" id='cancelplayer' onClick={this.props.cancelCallback}>Cancel</a>
        </form>
    </div>
  )}
}
