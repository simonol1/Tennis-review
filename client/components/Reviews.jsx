import React from 'react'

import ReviewForm from './ReviewForm'
import PlayerForm from './PlayerForm'

import api from '../api'


export default class Reviews extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      addPlayerVisible: false
    }
  }


  componentDidMount() {
    api.getReviews((err, reviews) => {
    this.setState({reviews})
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

  refreshForm() {
    api.getPlayer((players) => {
      this.setState({players})
    })
  }
  handleSubmit(evt) {
    evt.preventDefault()
    api.saveReview(this.state.review, (err, review) => {
      if (err) console.log({err});
      if (!err) this.refreshForm()
      else throw(err)
    })
  }


render () {
  return (
    <div className="row">
      <div className="six columns">
        {this.state.addPlayerVisible && <PlayerForm submitCallback={this.addPlayer.bind(this)}
        cancelCallback={this.hideAddPlayer.bind(this)}
        />} <button id='addplayerbutton' onClick={e => this.showAddPlayer(e)}>Add Player</button> {' '}
        <a href="#" id='cancel' onClick={this.props.cancelCallback}>Cancel</a>
          <ReviewForm onSubmit={(evt) => this.handleSubmit(evt)}/>
      </div>
        <div className="six columns">
          <h1 className='page2-header'>Review a Match</h1>
      </div>

  </div>
)}
}
