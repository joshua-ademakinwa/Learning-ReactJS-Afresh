// NOTE - Styling and CSS Basics - 20
// * Using Inline Styling
// * Specify object whose key is a carmel case version of styling(CSS) and the value is a string

import React from "react";

const heading = {
  fontSize: "72px",
  color: "blue",
};

function Inline() {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
    </div>
  );
}

export default Inline;
