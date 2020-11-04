import React from "react";

class ImageCard extends React.Component {
  render() {
    const { description, urls } = this.props.image; // image is passed as a prop to this, therefore this.props.image can be destructured to provide description and urls of that image in this component

    return (
      <div>
        <img alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
