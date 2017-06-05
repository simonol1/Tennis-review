import {combineReducers} from 'redux'

import reviews from './reviews'
import players from './players'

export default combineReducers({
  players,
  reviews
})
