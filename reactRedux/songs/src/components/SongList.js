import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

/**
 * convention says that we are taking the state object and mapping it to the properties of the component.
 *
 * we pass it in state, which is all of the state from the redux store, i.e. everything that has been saved by the reducers.
 */
const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

/**
 * This is how we save properties to a component - connect is a function that connects a React component to the Redux store
 *
 * In this instance we are telling the connect function that we want to get a list of songs out of the Redux store with the mapStateToProps function and passing it to the SongList component. So when the list of songs in the store, so when the list of songs in the list changes it is passed down to the React component.
 */
export default connect(mapStateToProps)(SongList);
