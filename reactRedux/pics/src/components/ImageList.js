import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";


const ImageList = (props) => {
  // map through what we got back from unsplash
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />; // select the url for the regular size image from list of options
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
