// * Event Handler for Functional component
// NOTE Event Handler is a Function (eg. onClick={clickHandler}) not a function call (eg. onClick={clickHandler()})
// ? The Differnce is the parentesis after clickHandler

import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Button Clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
