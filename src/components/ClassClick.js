// * Event Handler for Class component
// NOTE Event Handler is a Function (eg. onClick={clickHandler}) not a function call (eg. onClick={clickHandler()})
// ? The Differnce is the parentesis after clickHandler

import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("Clicked the Button");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}

export default ClassClick;
