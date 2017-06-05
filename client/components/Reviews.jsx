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

  handleSubmit(evt, review) {
    evt.preventDefault()
    console.log("submitting review");
    api.addReview(review, (err, response) => {
      this.props.history.push('/reviewlist')
      // window.location.reload(true)
      console.log({response});
    })
  }

render () {
  return (
    <span>
    <div className="row">
      <div className="twelve columns">
        <Link className='home' to='/'>HOME</Link>
      </div>
    </div>
        <div className="row">
        <div className="six columns">
          {this.state.addPlayerVisible && <PlayerForm onChange={this.handleChange.bind(this)} submitCallback={this.addPlayer.bind(this)}
          cancelCallback={this.hideAddPlayer.bind(this)}/>}
          <button id='addplayerbutton' onClick={e => this.showAddPlayer(e)}>Add Player</button> {' '}
          <ReviewForm players={this.state.players} onChange={this.handleChange.bind(this)} onSubmit={(evt, review) => this.handleSubmit(evt, review)}/>
       </div>
      <div className="six columns">
        <h1 className='page2-header'>Review a Match</h1>
      </div>
   </div>
 </span>
  )}
}

function mapStateToProps(state) {
  console.log(state);
  return {
    props:props.state
  }
}

export default connect(mapStateToProps)(ReviewList)
