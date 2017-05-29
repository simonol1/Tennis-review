import React from 'react'

import api from '../api'
import PlayerForm from './PlayerForm'

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      players: {
      players: [],
      player.id: null
    },
      review: {
      Opponent:'',
      Score:'',
      Reviewer:'',
      Content:''
      },
    review: []
    }
  }

    componentDidMount() {
      api.getPlayers((err, players) => {
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

    refreshForm() {
      api.getReviews((reviews) => {
        this.setState({reviews})
      })
    }

    handleChange(evt) {
      evt.preventDefault()
      this.setState({
        [evt.target.name]: evt.target.value
      })
    }

    renderPlayerOptions() {
      console.log(this.state);
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
      <input type='text' id='column'name='name' placeholder='Player name' onChange={this.handleChange.bind(this)}/>
      <input type='text' id='column'name='name' placeholder='Opponents name' onChange={this.handleChange.bind(this)}/>
      <input type='text' id='column'name='name' placeholder='Game score' onChange={this.handleChange.bind(this)}/>
      <input type='text' id='column' name='name' placeholder='Date' onChange={this.handleChange.bind(this)}/>
      <textarea type='text' id='review-details' name='name' placeholder='Review' onChange={this.handleChange.bind(this)}></textarea>
      <input type='submit' id='submit' value='Submit'/>
    </form>
  )}
}
