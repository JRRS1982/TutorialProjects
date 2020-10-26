import React from "react";
import ReactDOM from "react-dom";

/**
 * CLASS based React Component
- Must be a Javascript Class
- Must extend / be a subclass of React.Component
- Must define a render method that returns some amount of JSX
 */
class App extends React.Component {
  constructor(props) {
    // inherit from parent - this is required if we use a constructor
    super(props);
    // in the constructor is the only time we directly set state
    this.state = { lat: null };
    // getCurrentPosition takes a long time to return and is unreliable.
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // call setState to update state
        this.setState({ lat: position.coords.latitude })
      },
      error =>  {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  // we need to have a render method on a React Component
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return  <div>Error: { this.state.errorMessage }</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return  <div>Latitude: { this.state.lat }</div>
    }
    return <div>Loading...</div>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
