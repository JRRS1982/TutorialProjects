import React from "react";
import VideoItem from "./VideoItem";

/**
 * we pass in videos to VideoList from the App.js file, that object is the
 * videos returned to us from the youtube call.
 */
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        video={video}
        onVideoSelect={onVideoSelect}
        key={video.id.videoId}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
