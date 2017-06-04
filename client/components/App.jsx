import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Reviews from './Reviews'
import ReviewList from './ReviewList'


const App = () => {
  return (
    <Router>
      <div>
        <Route path='/' exact={true} component={Home}/>
        <Route exact path='/reviews' className='reviews' component={Reviews}/>
        <Route exact path='/reviewlist' component={ReviewList}/>
      </div>
    </Router>
  )
}

export default App
