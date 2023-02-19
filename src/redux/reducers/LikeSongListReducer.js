import { ADD_SONG_TO_LIST, REMOVE_SONG_FROM_LIST } from "../actions/index.js";

const initialState = {
  songs: [],
};

const LikeSongListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG_TO_LIST:
      return {
        ...state,
        songs: [...state.songs, action.payload],
      };
    case REMOVE_SONG_FROM_LIST:
      return {
        ...state,
        songs: state.songs.filter((song) => song.id !== action.payload),
      };
    default:
      return state;
  }
};

export default LikeSongListReducer;
