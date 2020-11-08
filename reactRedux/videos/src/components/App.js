import React from "react";
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

/**
 * complete a callback every time someone adds a term to the search bar that return videos from youtube
 */
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('rick roll'); // default search for the app.
  }
  
  onTermSubmit = async (term) => {
    /**
     * so youtube is a pre-configured axios object, we are adding an endpoint to make the request to on youtube api, and
     * specifying params that are required by youtube to make a request - and passing q (what youtube wants) - the term
     * that we are wanting to search for.
     *
     * This is an async request as we will need to wait on a response from the api call.
     */
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        {/* onFormSubmit and onTermSubmit callback may be called the same thing in an PRD project, but here its different for clarity */}
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
