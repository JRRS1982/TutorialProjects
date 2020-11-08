import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value }); // set the search term as the value of what is in the input of the search bar
  };

  onFormSubmit = (event) => {
    event.preventDefault(); // stop the page from refreshing
    // SO WHEN WE SUBMIT THE FORM BELOW ON THE SEARCH BAR THE PARENT COMPONENT IS TOLD WHAT THE SEARCH TERM IS
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
