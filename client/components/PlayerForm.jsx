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
  api.savePlayer(this.state.player, (err, player) => {
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
    console.log(this.state);
    return (
      <div className="add-player">
        <form>
             <input type='text' id='column'name='name' placeholder='Name' onChange={this.handleChange.bind(this)}/>
             <input type='text' id='column'name='name' placeholder='Email' onChange={this.handleChange.bind(this)}/>
             <input type='text' id='column'name='name' placeholder='Mobile' onChange={this.handleChange.bind(this)}/>
             <input type='submit' id='submit' value='Submit'/>
        </form>
    </div>
  )}
}
