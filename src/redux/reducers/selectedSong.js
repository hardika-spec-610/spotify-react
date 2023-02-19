import { ADD_SONG_TO_SELECTED, GET_SONGS } from "../actions";

const initialState = {
  songData: [],
  selectedSong: null,
};

const selectedSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        songData: action.payload,
      };
    case ADD_SONG_TO_SELECTED:
      return {
        selectedSong: action.payload,
      };

    default:
      return state;
  }
};

export default selectedSongReducer;
