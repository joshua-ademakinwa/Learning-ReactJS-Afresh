// NOTE - Pure Component Class - 26

import React, { Component } from "react";
// import RegComp from './RegComp'
// import PureComp from './PureComp'
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Joshua",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Joshua",
      });
    }, 2000);
  }
  render() {
    console.log("*************Parent Component Render*************");
    return (
      <div>
        Parent Component
        {/* <RegComp name={this.state.name}></RegComp> */}
        {/* <PureComp name={this.state.name}></PureComp> */}
        <MemoComp name={this.state.name}></MemoComp>
      </div>
    );
  }
}

export default ParentComp;
