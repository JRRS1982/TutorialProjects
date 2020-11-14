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
    value: "Red",
  },
  {
    label: "The Color Green",
    value: "Green",
  },
  {
    label: "The Color Blue",
    value: "Blue",
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
};
