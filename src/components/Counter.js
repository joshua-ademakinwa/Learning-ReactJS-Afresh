// ? When making use of this.state;
// * 1. Always make use of setState and never modify the state directly
// * 2. When you want to execute a code after the state has been updated/changed,
// !        don't place after the setState method,
// *        place that code in the call back function which is the second argument to the setState method.
// * 3. When you have to update state based on the previous state value,
// *        pass in a function as an argument instead of the regular object - using pervState

import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    //// * This is the setState method
    // this.setState(
    // {
    // count: this.state.count + 1,
    // },
    //// * Call back arrow function for execution after a changed setState method
    // () => {
    // console.log("Callback Value", this.state.count);
    // },
    // );
    //// * Wrong way of executing after a changed setState
    // console.log(this.state.count);

    // * Using prevState as an argument
    this.setState(
      (prevState, props) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log("Callback Value", this.state.count);
      },
    );
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        <div>Counter - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
