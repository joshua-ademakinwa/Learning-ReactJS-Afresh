// NOTE - Follow this steps; (Two files created ParentComponent.js and ChildComponent.js)
// ? To call a method in the parent component from a button in the child component by passing the method as props in the child component
// * 1. In the Parent Component file, Define the method
// * 2. In the child-component-tag, Pass the method as a prop
// * 3. In the Child Component file, Access the method  using props object
// * 4. And if you want to pass a parameter, Use the arrow function syntax - to pass a parameter from child to the parent

import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }
  // * 1. Defining the method in the constructor - also the parameter childName added (Step 4)
  greetParent(childName) {
    // alert('Hello' + this.state.parentName)
    // * The above Alert is fine but, Since we're using ES7, we use template litterals
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }
  render() {
    return (
      <div>
        {/* //* 2. Passing the method as a prop */}
        <ChildComponent greetHandler={this.greetParent}></ChildComponent>
      </div>
    );
  }
}

export default ParentComponent;
