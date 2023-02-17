import { ADD_SONG_TO_SELECTED } from "../actions";

const initialState = {
  selectedSong: null,
};

const selectedSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG_TO_SELECTED:
      return {
        ...state,
        selectedSong: action.payload,
      };

    default:
      return state;
  }
};

export default selectedSongReducer;
