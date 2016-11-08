import React from 'react'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      data: ''
    }
    this.updateState = this.updateState.bind(this)
  }

  render () {
    return (
      <div>
        <input type = "text" value = {this.state.data} onChange = {this.updateState} />
        <h4>{this.state.data}</h4>
      </div>
    )
  }

  updateState (e) {
    this.setState({
      data: e.target.value
    })
  }
}

class Content extends React.Component {
  render () {
    return (
      <h1>Count is: {this.props.myCount}</h1>
    )
  }
}

export default App
