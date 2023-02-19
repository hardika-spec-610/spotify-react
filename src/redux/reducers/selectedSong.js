import {
  ADD_SONG_TO_SELECTED,
  GET_SONGS,
  GET_SONGS_LOADING,
  GET_SONGS_ERROR,
} from "../actions";

const initialState = {
  songData: [],
  selectedSong: {},
  isLoading: true,
  isError: false,
};

const selectedSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        songData: action.payload,
      };
    case GET_SONGS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_SONGS_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

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
