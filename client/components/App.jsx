import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import { createHashHistory } from 'history';

import Home from './Home'
import Reviews from '../containers/Reviews'
import ReviewList from '../containers/ReviewList'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'


const App = () => {
  return (
    <Router>
      <div>
        <Nav/>
        <Header/>
        <Route path='/' exact={true} component={Home}/>
        <Route exact path='/reviews' className='reviews' component={Reviews}/>
        <Route exact path='/reviewlist' component={ReviewList}/>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
