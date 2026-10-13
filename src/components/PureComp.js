// NOTE - Pure Component Class -26
// * We can create a component by extending the PureComponent class
// * A Pure Component implements  the shouldComponentUpdate lifecycle method  by performing a shallow comparison on the props and state of the component.
// * If there is no difference, the component is not re-rendered - performance boost
// * It is a good idea to ensure that all the children component are also pure to aviod unexpected behaviour
// * Never mutate the state. Always return a new object that reflects the new state

import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure Component Render");
    return <div>Pure Component {this.props.name}</div>;
  }
}

export default PureComp;
