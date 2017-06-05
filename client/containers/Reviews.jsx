import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import ReviewForm from '../components/ReviewForm'
import PlayerForm from '../components/PlayerForm'
import addReview from '../action-creators/AddReview'
import addPlayer from '../action-creators/AddPlayer'
import getPlayers from '../action-creators/GetPlayers'
import Header from '../components/Header'
import Footer from '../components/Footer'


class Reviews extends React.Component {
  componentDidMount() {
    this.props.dispatch(addReview())
    this.props.dispatch(addPlayer())
    this.props.dispatch(getPlayers())
  }

  handleSubmit(evt, review) {
    evt.preventDefault()
    api.addReview(review, (err, response) => {
      this.props.history.push('/reviewlist')
      window.location.reload(true)
    })
  }

render () {
  return (
    <span>
    <div className="row">
      <div className="twelve columns">
        <Link className='home' to='/'>HOME</Link>
        <Header/>
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
      </div>
   </div>
   <Footer/>
 </span>
  )}
}

function mapStateToProps(state) {
  console.log(state);
  return {

  }
}

export default connect(mapStateToProps)(Reviews)
