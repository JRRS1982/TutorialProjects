import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

// onSearchSubmit will be a callback function that is passed to the searchbar that calls back to the App
/**
 * 1) component renders itself one time with no list of images
 * 2) onSearchSubmit method is called
 * 3) request is made to unsplash (async so will take time to complete)
 * 4) request is complete
 * 5) set image data on state of App component
 * 6) App component rerenders and shows images
 */
class App extends React.Component {
  state = { images: [] };
  /**
   * async as we are waiting on a response from axios
   * arrow function as its a callback
   */
  onSearchSubmit = async (searchTerm) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: searchTerm }, // what we are searching for
      headers: {
        // as per the unsplash docs... we need to include a header with auth.
        Authorization: "Client-ID cCd8B3JOJ4LOW1_V053RUWEXBDRijih_9mkP9vAmm74", // access key from unsplash
      },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        {/* run onSearchSubmit when the search is submitted, onSubmit is the prop name that is passed to the component */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length}
      </div>
    );
  }
}

export default App;
