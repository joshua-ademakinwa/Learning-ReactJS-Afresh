// * This is a Class Component 

import React, { Component } from "react";

class Welcome extends Component {
    render() {
        // return <h1>This is a Class Component</h1>
        return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}

export default Welcome