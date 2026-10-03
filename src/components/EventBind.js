// NOTE - Ways of handling event
// * Binding the event handler in the render method - line 19-23 & 33
// * Using Arrow function in the render method - line 19-23 & 34
// * Bindind the event handler in the constructor. This is the best to Use - line 17, 19-23 & 35
// * Using Arrow function as a Class proterty - line 24-28 and 35

import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    // * The bind event hanlder in constructor
    // this.clickHandler = this.clickHandler.bind(this);
  }
  // clickHandler() {
  //   this.setState({
  //     message: "Goodbye!",
  //   });
  // }
  clickHandler = () => {
    this.setState({
      message: "Goodbye!",
    });
  };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
