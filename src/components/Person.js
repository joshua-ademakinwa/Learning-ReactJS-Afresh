// NOTE - List Rendering, How to render list of data - 17 (File 2)

import React from "react";

// * pass person as a prop
function Person({ person }) {
  return (
    <div>
      <h2>
        {/* // * person represent the object in the list - personList, so to access we need the dot operator */}
        I am {person.name}. I am {person.age} years old, and I am fluent with{" "}
        {person.skill}
      </h2>
    </div>
  );
}

export default Person;
