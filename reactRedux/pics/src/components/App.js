import React from "react";
import SearchBar from "./SearchBar";

// onSearchSubmit will be a callback function that is passed to the searchbar that calls back to the App
class App extends React.Component {
  onSearchSubmit(searchTerm) {
    console.log(searchTerm);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        {/* run onSearchSubmit when the search is submitted, onSubmit is the prop name that is passed to the component */}
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
