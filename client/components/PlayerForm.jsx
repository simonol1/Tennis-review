import React from 'react'
import {connect} from 'react-redux'
import api from '../api'
import {addPlayer} from '../action-creators/AddPlayer'

class PlayerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dispatch: props.dispatch,
      newPlayerDetails: {}
    }
  }
  updateNewPlayerDetails(e) {
    let player = this.state.newPlayerDetails
    player[e.target.name] = e.target.value
    this.setState({newPlayerDetails: player})
    // this.state.dispatch(updateNewPlayerDetailsAction(e.target.name, e.target.value))
  }
  submitPlayer(e) {
    e.preventDefault()
    this.state.dispatch(addPlayer(this.state.newPlayerDetails))
  }
  render () {
    return (
      <form className='player-form'>
        <input type='text' id='column' name='name' onChange={(e) => this.updateNewPlayerDetails(e)}  placeholder='Name' />
        <input type='text' id='column' name='email' onChange={(e) => this.updateNewPlayerDetails(e)} placeholder='Email' />
        <input type='text' id='column' name='mobile' onChange={(e) => this.updateNewPlayerDetails(e)} placeholder='Mobile' />
        <input type='submit' id='submit' value='Submit' onClick={(e) => this.submitPlayer(e)}/>
      </form>
    )
  }
}


export default connect()(PlayerForm)
