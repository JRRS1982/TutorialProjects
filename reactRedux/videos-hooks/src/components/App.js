import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  /*
   * componentDidMount is a lifecycle method, that will be called once, when the component is first rendered, this useEffect has a [] empty, therefore will be called only once, when the component is first rendered. So this useEffect replaces that lifecycle component
   */
  useEffect(() => {
    onTermSubmit('rick roll'); // default search for the app.
  }, []); // run only once.

  const onTermSubmit = async (term) => {
    // youtube is a pre-configured axios object, we are adding an endpoint to make the request to the youtube api, and specifying params that are required by youtube - and passing q (required param from Youtube) the term that we are wanting to search for. This is an async request as we will need to wait on a response from the api call.
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="ui container">
      {/* when the form is submitted call the onTermSubmit, which gets the videos */}
      <SearchBar onFormSubmit={onTermSubmit} /> 
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoSelect={onVideoSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
