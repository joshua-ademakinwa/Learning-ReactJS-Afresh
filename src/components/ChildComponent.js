// NOTE - Follow this steps; (Two files created ParentComponent.js and ChildComponent.js)
// ? To call a method in the parent component from a button in the child component by passing the method as props in the child component
// * 1. In the Parent Component file, Define the method
// * 2. In the child-component-tag, Pass the method as a prop
// * 3. In the Child Component file, Access the method  using props object
// * 4. And if you want to pass a parameter, Use the arrow function syntax - to pass a parameter from child to the parent

import React from "react";

function ChildComponent(props) {
  return (
    <div>
      {/* // * Step 3 and 4 here */}
      <button onClick={() => props.greetHandler("Joke")}>Greet Parent</button>
      <button onClick={() => props.greetHandler("Ayo")}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
