import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChangeCallback = (event) => {
    this.setState({ term: event.target.value }); // set the search term as the value of what is in the input of the search bar
  };

  onFormSubmitCallback = (event) => {
    event.preventDefault(); // stop the page from refreshing
    // TODO make sure we call callback from parent component
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form 
          className="ui form" 
          onSubmit={this.onFormSubmitCallback}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChangeCallback}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
