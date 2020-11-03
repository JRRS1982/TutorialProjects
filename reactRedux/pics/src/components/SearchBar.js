import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // an arrow function will remove issues with 'this'
  // so whenever a form is submitted on the render function with onSubmit, this.onFormSubmit is called, that uses the event that this is... and prevents its default behaviour, and also calls this.props which comes from the App component, and calls the onSubmit function.. i.e. from App....
  onFormSubmit = (event) => {
    event.preventDefault(); // stop page from refreshing when enter button is pressed, which is the default
    this.props.onSubmit(this.state.term); // class based component so requires a this prefix
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            {/* onInputChange is a callback function, we are not adding () to the end of it, as that would call the function every time render is called instead, in this case we are just passing in a reference to the function to the input element, so input can call onInputChange in the function... so when anyone types anything.. character by character */}
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })} // when text is entered to the input field this is set in, the enclosed callback function is called, that takes what event has happened 'e' aka event and we set the value of that event as the search 'term'
            />
          </div>
        </form>
      </div>
    );
  }
}


export default SearchBar;
