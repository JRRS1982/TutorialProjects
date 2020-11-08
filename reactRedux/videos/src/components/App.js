import React from "react";
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube';

/**
 * complete a callback every time someone adds a term to the search bar that return videos from youtube
 */
class App extends React.Component {
  onTermSubmit = (term) => {
  /**
   * so youtube is a pre-configured axios object, we are adding an endpoint to make the request to on youtube api, and 
   * specifying params that are required by youtube to make a request - and passing q (what youtube wants) - the term
   * that we are wanting to search for.
   */
    youtube.get('/search', {
      params: {
        q: term
      }
    });
  };

  render() {
    return (
      <div className="ui container">
        {/* onFormSubmit and onTermSubmit callback may be called the same thing in an PRD project, but here its different for clarity */}
        <SearchBar onFormSubmit={this.onTermSubmit} /> 
      </div>
    );
  }
}

export default App;
