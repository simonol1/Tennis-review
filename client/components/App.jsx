import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Reviews from './Reviews'
import OldReviews from './OldReviews'


const App = () => {
  return (
    <Router>
      <div>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/reviews' className='reviews' component={Reviews}/>
        <Route path='/oldreviews' component={OldReviews}/>
      </div>
    </Router>
  )
}

export default App
