// NOTE - Pure Component Class - 26

import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: 'Joshua',
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Joshua',
      })
    }, 2000)
  }
  render() {
    console.log('*************Parent Component Render*************');
    return (
      <div>
        Parent Component
        <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    )
  }
}

export default ParentComp