// NOTE - Styling and CSS Basics - 20
// * Using regular CSS Style Sheets

import React from "react";
import "./myStyles.css";

// * The Normal method like the HTML and CSS linking
// function StyleSheet() {
//   return (
//     <div>
//       <h1 className="primary">Stylesheets</h1>
//     </div>
//   );
// }

// * Conditionally applying a class base on props or state of the component
// function StyleSheet(props) {
//   let className = props.primary ? "primary" : "";
//   return (
//     <div>
//       <h1 className={className}>Stylesheets</h1>
//     </div>
//   );
// }

// * To specify multiple classes, use template literals
function StyleSheet(props) {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheets</h1>
    </div>
  );
}

export default StyleSheet;
