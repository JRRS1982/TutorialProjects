import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');
  
  const onInputChange = (event) => {
    setTerm(event.target.value); // set the search term as the value of what is in the input of the search bar
  };
  
  const onSubmit = (event) => {
    event.preventDefault(); // stop the page from refreshing
    onFormSubmit(term);
  };
 
  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
