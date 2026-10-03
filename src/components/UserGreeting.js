// NOTE - Conditional Rendering - 16

import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    // return (
    //   <div>
    //     <div>Welcome Joshua</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );

    //* Using the if / else statement
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Joshua</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    //* Using Elememt variables: Javasript variables to store elements - Declaring element varable inside render method
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Joshua</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;

    //* Using Ternary conditional Operators. These is recommended
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Joshua</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    //* Using short circuit operator. These also is recommended
    return this.state.isLoggedIn && <div>Welcome Joshua</div>;
  }
}

export default UserGreeting;
