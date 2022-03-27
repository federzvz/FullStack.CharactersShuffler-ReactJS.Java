import React, { Component } from 'react'
import From from '../components/From/From'
import Result from '../components/Result/Result'

class App extends Component {// component stateful
  render() {
    return (
      <div class="container">
          <From />
          <Result />
      </div>
    )
  }
}

export default App