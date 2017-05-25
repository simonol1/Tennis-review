import React from 'react'

import api from '../api'

class PlayerForm extends React.Component {
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
componentDidMount() {
  api.getPlayers((err, players) => {
    this.setState({players})
  })
}

handleSubmit(evt) {
  evt.preventDefault()
  api.savePlayer(this.state.player, (err, player) => {
    if (!err) this.refreshForm()
    else throw(err)
  })
}
refreshForm() {
  api.getPlayer((players) => {
    this.setState({players})
  })
}

handleChange(evt) {
  let player = {...this.state.player}
  player[evt.target.name] = evt.target.value
  this.setState({player})
}

renderPlayerOptions() {
  return this.state.players.map((player,i) => {
    return <option key={i} value={player.name}>{player.name}</option>
  })
}

  render () {
    return (
    <form className = 'main-form' onSubmit={(evt) => this.handleSubmit(evt)}>
      <select onChange={evt => this.handleChange(evt)}>
         {this.renderPlayerOptions()}
      </select>
      <input type='email'id='column' name='email' placeholder='Email' onChange={this.handleChange.bind(this)}/>
      <input type='tel' id='column' name='mobile' placeholder='Mobile number' onChange={this.handleChange.bind(this)}/>
      <input type='submit' id='submit' value='Submit'/>
    </form>
  )}
}



export default PlayerForm
