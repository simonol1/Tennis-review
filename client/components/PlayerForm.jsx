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


addPlayer (e) {
  e.preventDefault()
  const test = this.state
  api.appendPlayer(test, this.props.finishAdd)
}

renderPlayerOptions() {
  return this.state.players.map((player,i) => {
    return <option key={i} value={player.name}>{player.name}</option>
  })
}

  render () {
    return (
      <div className="add-test">
          <form>
          <select onChange={evt => this.handleChange(evt)}>
             {this.renderPlayerOptions()}
             </select>
             <input type='text' id='column'name='name' placeholder='Email' onChange={this.handleChange.bind(this)}/>
             <input type='text' id='column'name='name' placeholder='Mobile' onChange={this.handleChange.bind(this)}/>
              <button onClick={e => this.addPlayer(e)}>Add Player</button> {' '}
                  <a href="#" onClick={this.props.finishAdd}>Cancel</a>
    </form>
    </div>
  )}
}



export default PlayerForm
