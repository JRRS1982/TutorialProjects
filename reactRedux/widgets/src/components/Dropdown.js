import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  
  /**
   * useEffect below: 
   * 
   * create a callback called onBodyClock, that setsOpen to false if the element we clicked on (event target) is not the Dropdown
   * 
   * add the click event listener to the the DOM / document body.
   * 
   * return will remove the event listener from the DOM / document body if the Drop down component is removed from the DOM
   * 
   */
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) { // is the element we clicked on (event target) inside our component
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener('click', onBodyClick); 
    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);
  
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null; // hide this option from the list if it is the selected item 
    };

    return (
      <div
        key={option.value}
        style={{ color: option.value }}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });
  
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <div className="label">Select a Color</div>
        <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
          <i className="dropdown icon"></i>
          <div className="text" style={{ color: selected.value }}>{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
