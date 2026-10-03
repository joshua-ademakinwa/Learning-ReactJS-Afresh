// * This is a Class Component

import React, { Component } from "react";

// class Welcome extends Component {
//     render() {
//         // return <h1>This is a Class Component</h1>
//         return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
//     }
// }
class Welcome extends Component {
  render() {
    const { name, heroName } = this.props;
    // Distructuring props or state in the render method for Class component
    return (
      <h1>
        Welcome {name} a.k.a {heroName}
      </h1>
    );
  }
}

export default Welcome;
