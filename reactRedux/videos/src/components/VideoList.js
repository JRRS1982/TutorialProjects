import React from "react";
import VideoItem from "./VideoItem";

/**
 * we pass in videos to VideoList from the App.js file, that object is the
 * videos returned to us from the youtube call.
 */
const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem />;
  });

  return <div>{renderedList}</div>;
};

export default VideoList;
