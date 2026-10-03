// NOTE - List Rendering, How to render list of data - 17 (File 1)
// NOTE - Lists and keys, Usefullness of adding key prop - 18
// NOTE - Index as Key Anti-patteren,. How to use key index for array that has no id or unique identifier - 19

// * The key props is a special attribute you need to include  when creating lists of elements.
// * Only use index as a key when;
// * 1. The items in your list do not have a unique id
// * 2. The list is a static list and will not change
// * 3. The list will never be reordered or filtered

import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Bruce", "Clark", "Diana", "Bruce"];
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "CLark",
      age: 25,
      skill: "Augular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
    {
      id: 4,
      name: "Joshua",
      age: 35,
      skill: "Python",
    },
  ];
  // * Using the map method to render the list of names
  // * Refractor the JSX into a seprate component (ie. seperate file), then use the component in the map method JSX
  const personList = persons.map((person) => (
    <Person key={person.id} person={person}></Person>
  ));
  const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);
  return (
    <div>
      <div>{personList}</div>
      <div>{nameList}</div>
    </div>
  );
}

export default NameList;
