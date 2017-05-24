import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Reviews from './Reviews'


const App = () => {
  return (
    <Router>
      <div>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/Reviews' className='reviews' component={Reviews}/>
      </div>
    </Router>
  )
}

export default App
