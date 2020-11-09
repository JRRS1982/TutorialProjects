import React, { useState } from "react";

const Accordion = ({ items }) => {
  /**
   * useState is a primitive component from React, it returns two things, and
   * we are destructuring what it returns by creating activeIndex and setActiveIndex
   * variables here. activeIndex is the piece of state we are trying to track, the
   * second is a function that we are using to update state. useState(null) where
   * null is the initial value of the state.
   */
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : ""; // if this item is active we want to add this css tag to open

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
