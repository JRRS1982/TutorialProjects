import React from "react";

class SearchBar extends React.Component {
  // any time someone types anything in the input this callback function is called, it is passed
  onInputChange(event) {
    // the onInputChange naming is a convention --- the onChange and that its applied to input
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* onInputChange is a callback function, we are not adding () to the end of it, as that would call the function every time render is called instead, in this case we are just passing in a reference to the function to the input element, so input can call onInputChange in the function... so when anyone types anything.. character by character */}
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
