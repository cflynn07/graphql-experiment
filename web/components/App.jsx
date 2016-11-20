import React from 'react'
import Relay from 'react-relay'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Accounts</h1>
        <hr />
        <h2>Emails</h2>
        <div>{this.props.account.name}</div>
      </div>
    )
  }
}

exports.Container = Relay.createContainer(App, {
  fragments: {
    account: () => Relay.QL`
      fragment on Account {
        id,
        name
      }
    `
  }
})

exports.route = {
  name: 'AppContainerRoute',
  params: {},
  queries: {
    account: () => Relay.QL`query {
      account(id: 1) 
    }`
  }
}
