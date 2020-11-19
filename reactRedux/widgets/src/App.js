import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a front end framework",
  },
  {
    title: "Why use React?",
    content: "React is a favourite front end framework for engineers",
  },
  {
    title: "How to use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <button onClick={()=> setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ? // ternary to show/hide the dropdown
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        /> : null 
      } 
    </div>
  );
};
