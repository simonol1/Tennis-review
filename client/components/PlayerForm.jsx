import React from 'react'

import api from '../api'

export default class PlayerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      addPlayerVisible: false,
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

componentWillReceiveProps(nextProps, nextState) {
  if (this.state != nextProps.player) {
    this.setState({...nextProps.player})
  }
}

handleSubmit(evt) {
  evt.preventDefault()
  api.addPlayer(this.state.player, (err, player) => {
    if (err) console.log({err});
    if (!err) this.refreshForm()
    else throw(err)
  })
}

handleChange(evt) {
  evt.preventDefault()
  this.setState({
    [evt.target.name]: evt.target.value
  })
}

  render () {

    return (
      <div className="add-player">
        <form className = 'player-form' onSubmit={(evt) => this.handleSubmit(evt)}>
             <input type='text' id='column'name='name' placeholder='Name' onChange={this.handleChange.bind(this)}/>
             <input type='text' id='column'name='name' placeholder='Email' onChange={this.handleChange.bind(this)}/>
             <input type='text' id='column'name='name' placeholder='Mobile' onChange={this.handleChange.bind(this)}/>
             <input type='submit' id='submit' value='Submit'/>
             <a href="#" id='cancel' onClick={this.props.cancelCallback}>Cancel</a>
        </form>
    </div>
  )}
}
