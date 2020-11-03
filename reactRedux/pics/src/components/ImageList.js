import React from "react";

const ImageList = (props) => {
  const images = props.images.map(({ id, urls, description }) => {
    // DESTRUCTURED - I.E. ELMENTS FROM THE LOOPED ITEM
    // map through what we got back from unsplash

    return <img key={id} src={urls.regular} alt={description} />; // select the url for the regular size image from list of options
  });
  return <div>{images}</div>;
};

export default ImageList;
