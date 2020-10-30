import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

/**
 * CLASS based React Component
- Must be a Javascript Class
- Must extend / be a subclass of React.Component
- Must define a render method that returns some amount of JSX
 */
class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  // we need to have a render method on a React Component
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}  />; // passing state of App to a prop of SeasonDisplay
    }
    return <Spinner message="Please accept location request..." />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
