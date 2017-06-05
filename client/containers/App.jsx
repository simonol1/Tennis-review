import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import { createHashHistory } from 'history';

import Home from './Home'
import Reviews from './Reviews'
import ReviewList from './ReviewList'


const App = () => {
  return (
    <Router>
      <div>
        <Nav/>
        <Header/>
        <Route path='/' exact={true} component={Home}/>
        <Route exact path='/reviews' className='reviews' component={Reviews}/>
        <Route exact path='/reviewlist' component={ReviewList}/>
      </div>
    <Footer?>
    </Router>
  )
}


function mapStateToProps(state) {
  console.log(state);
  return {
    props:props.state
  }
}

export default connect(mapStateToProps)(App)
