import React from 'react'
import ReactDOM from 'react-dom'
import Relay from 'react-relay'

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://api.dev/graphql')
)

import App from './components/App.jsx'

ReactDOM.render(<Relay.RootContainer
  Component = {App.Container}
  route = {App.route}
/>, document.getElementById('app'))
