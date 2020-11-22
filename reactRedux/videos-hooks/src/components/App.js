import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, youtubeSearch] = useVideos('rick roll'); // useVideos is a custom hook 

  // setSelectedVideo(response.data.items[0]);

  return (
    <div className="ui container">
      {/* when the form is submitted call the onTermSubmit, which gets the videos */}
      <SearchBar onFormSubmit={youtubeSearch} /> 
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              /**
               * (video) => setSelectedVideo could also be the argument passed in here, but as it has only one argument we don't need to all that typing, we can ignore it, React will implicitly use the video as a param. I.e. video is what the user just clicked on, React will use that as the parameter to setSelectedVideo.
               * 
               * When you take and pass only one argument you can pass it through directly
               */
              onVideoSelect={setSelectedVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
