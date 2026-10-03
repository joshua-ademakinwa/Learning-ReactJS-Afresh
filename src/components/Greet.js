// * This is a Functional Component

import React from "react";

// function Greet() {
//     return <h1>Hello Joshua</h1>
// }

// const Greet = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>Hello {props.name}! a.k.a {props.heroName}</h1>
//       {props.children}
//     </div>
//   )
// }

//// * Distructuring props in the parameters for a functional component
// const Greet = ({ name, heroName }) => {
//   return (
//     <div>
//       <h1>
//         Hello {name}! a.k.a {heroName}
//       </h1>
//     </div>
//   );
// };
// * Distructuring props in the function body for a functional component
const Greet = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Hello {name}! a.k.a {heroName}
      </h1>
    </div>
  );
};

export default Greet;
