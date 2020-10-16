import React, { Component } from "react";
import axios from "axios";

class Fib extends Component {
  state = {
    // creating a default state for the class
    seenIndexes: [],
    values: {},
    index: "",
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues() {
    const values = await axios.get("/api/values/current");
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    // list of indexes that have been requested and are stored in long term postgres db
    const seenIndexes = await axios.get("/api/values/all");
    this.setState({ seenIndexes: seenIndexes.data });
  }

  // a bound function that
  handleSubmit = async (event) => {
    event.preventDefault(); // dont let the form submit itself

    await axios.post("/api/values", {
      index: this.state.index, // whatever the user entered into index.
    });
    this.setState({ index: "" }); // clear index after successfully sending it to backend.
  };

  // seenIndexes comes from postgres and is an array of objects
  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number).join(", "); // de-structured map to get and return 'number' attribute of elements in the seenIndexes array, then add a comma between them
  }

  // values come from redis and therefore is an object which has key-value pairs.
  renderValues() {
    const entries = [];
    for (let key in this.state.values) {
      // key is the index of the fib number
      entries.push(
        <div key={key}>
          For index {key} I calculated {this.state.values[key]}
        </div>
      );
    }
    return entries;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your index:</label>
          <input // when user presses button
            value={this.state.index}
            onChange={event => this.setState({ index: event.target.value })}
          />
          <button>Submit</button>
        </form>

        <h3>Indexes I have seen:</h3>
        {this.renderSeenIndexes()}

        <h3>Calculated Values:</h3>
        {this.renderValues()}
      </div>
    );
  }
}

export default Fib;