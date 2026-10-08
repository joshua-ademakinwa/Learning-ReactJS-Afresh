// NOTE - Component Mounting Lifecycle Methods - 23 
// NOTE - Component Updating Lifecycle Methods - 24

import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Joshua",
    };
    console.log("LifecycleA Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }
  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate');
    // return true;
  }
  changeState = () => {
    this.setState({
      name: 'Code Evolution'
    })
  }
  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB></LifecycleB>
      </div>
    );
  }
}

export default LifecycleA;
