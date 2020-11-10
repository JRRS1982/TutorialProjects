import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";


const items = [
  {
    title: "What is React?",
    content: "React is a front end framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite front end framework for engineers",
  },
  {
    title: "How to use React?",
    content: "You use React by creating components",
  },
];

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
