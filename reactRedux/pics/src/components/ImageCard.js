import React from "react";

/**
 * - let imagecard render itself and its image
 * - reach into dom adn figure out the height of the image
 * - set image height on state to get the component to rerender
 * - when rerendering assign a grid-row-end to make sure the image takes up the appropriate space.
 */
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  // after the component is rendered componentDidMount is called - lifecycle method in React. It will reach into the DOM and get details about the image.
  componentDidMount() {
    // componentDidMount is called immediatly, i.e. before we actually have an image back from the API call, therefore we need to add a callback / listener for when the image has been loaded... load i
    this.imageRef.current.addEventListener("load", this.setSpansCallback);
  }

  setSpansCallback = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1); // how many rows should this image span? Each image height is 'height', divided by the 150px that we have set for this in the css... provides how many rows in the css grid we need this image to cover... +1 to hand edge cases
    this.setState({ spans }); // how many row grids this image card will take
  };

  render() {
    const { description, urls } = this.props.image; // image is passed as a prop to this, therefore this.props.image can be destructured to provide description and urls of that image in this component

    return (
      // add the number of spans this needs to the card css grid-row-spans attribute i.e
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}> 
        {/* using imageRef here which will tell us about the img DOM 'node' which it is contained within the img is a JSX tag, it is not a DOM element at this point in time */}
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
