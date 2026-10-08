// NOTE - Component Mounting Lifecycle Methods - 23
// NOTE - Component Updating Lifecycle Methods - 24

import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Joshua",
    };
    console.log("LifecycleB Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }
  shouldComponentUpdate() {
    console.log('LifecycleB shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleB getSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate() {
    console.log('LifecycleB componentDidUpdate');
    // return true;
  }
  render() {
    console.log("LifecycleB render");
    return <div>Lifecycle B</div>;
  }
}

export default LifecycleB;
