import React from 'react'

import ReviewForm from './ReviewForm'
import PlayerForm from './PlayerForm'
import {Link} from 'react-router-dom'

import api from '../api'


export default class Reviews extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      players: [],
      addPlayerVisible: false
    }
  }


  componentDidMount() {
    api.getReviews((err, reviews) => {
      api.getPlayers((err, players) => {
        this.setState({players, reviews})
      })
    })
 }

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

  handleSubmit(evt) {
    evt.preventDefault()
    console.log(this.props);
    api.addReview(this.state.review, (err, review) => {
      this.props.history.push('/reviewlist')
      // window.location.reload(true)
    })
  }

render () {
  return (
    <div className="row">
       <div className="six columns">
        {this.state.addPlayerVisible && <PlayerForm submitCallback={this.addPlayer.bind(this)}
        cancelCallback={this.hideAddPlayer.bind(this)}/>}
        <button id='addplayerbutton' onClick={e => this.showAddPlayer(e)}>Add Player</button> {' '}
        <ReviewForm players={this.state.players} onSubmit={(evt) => this.handleSubmit(evt)}/>
       </div>
      <div className="six columns">
        <h1 className='page2-header'>Review a Match</h1>
        <Link to='/'>Home</Link>
      </div>
   </div>
  )}
}
