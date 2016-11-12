import About from './About.jsx'
import App from './App.jsx'
import Contact from './Contact.jsx'
import Home from './Home.jsx'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

ReactDOM.render((
  <Router history = {hashHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {Home}/>
      <Route path = "home" component = {Home}/>
      <Route path = "about" component = {About}/>
      <Route path = "contact" component = {Contact}/>
    </Route>
  </Router>
), document.getElementById('app'))
