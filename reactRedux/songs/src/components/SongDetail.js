import React from "react";
import { connect } from "react-redux";

/** destructuring the state.selectedSong into just selectedSong */
const SongDetail = ({ selectedSong }) => {
  /** as the initial state is null for a selected song */
  if (!selectedSong) {
    return <div>Select a song</div>;
  }

  /** where we build teh jsx of the component */
  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: {selectedSong.title}</p>
      <p>Duration: {selectedSong.duration}</p>
    </div>
  );
};

/** where we save the song that has been selected  */
const mapStateToProps = (state) => {
  return {
    selectedSong: state.selectedSong,
  };
};

/** connecting the properties of this component with the state */
export default connect(mapStateToProps)(SongDetail);
