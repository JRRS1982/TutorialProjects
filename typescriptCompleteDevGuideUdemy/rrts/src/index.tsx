import React from 'react';
import ReactDOM from "react-dom";

interface AppProps {
  color: string;
}

// /*
// React.Component has a second argument which, if not provides sets a default state of an empty object, so we create an interface to pass it which will have the properties we want OR we define a new state in the component.
// */
// interface AppState { 
//   counter: number;
// }

class App extends React.Component<AppProps> { // component is a generic class and therefore we can add an interface to it, without the interface we could not set properties
  state = { counter: 0 };
  
  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };
  
  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };
  
  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        { this.state.counter }
      </div>
    );
  }
}

ReactDOM.render(
  <App color="red"/>, 
  document.querySelector('#root') // render app to the root element in React
);