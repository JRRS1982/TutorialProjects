import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'An example title', duration: '4.05'},
    { title: 'An example title2', duration: '5.03'},
    { title: 'An example title3', duration: '2.01'},
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});