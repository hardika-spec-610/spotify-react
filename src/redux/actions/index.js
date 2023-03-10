const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "828f11075cmsh673f44971af4ac0p15da10jsn7af9d8953784",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};
export const ADD_SONG_TO_SELECTED = "ADD_SONG_TO_SELECTED";
export const ADD_SONG_TO_LIST = "ADD_SONG_TO_LIST";
export const REMOVE_SONG_FROM_LIST = "REMOVE_SONG_FROM_LIST";
export const GET_SONGS = "GET_SONGS";
export const GET_SONGS_LOADING = "GET_SONGS_LOADING";
export const GET_SONGS_ERROR = "GET_SONGS_ERROR";

export const loadArtist = () => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(url + "Arijit Singh", options);
      if (response.ok) {
        const songs = await response.json();
        const { data } = songs;
        console.log("dispatch", songs);
        dispatch({
          type: GET_SONGS,
          payload: data,
        });
        dispatch({
          type: GET_SONGS_LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: GET_SONGS_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_SONGS_ERROR,
          payload: true,
        });
      }
    } catch (e) {
      dispatch({
        type: GET_SONGS_LOADING,
        payload: false,
      });
      dispatch({
        type: GET_SONGS_ERROR,
        payload: true,
      });
    }
  };
};

export const addSongToPlayerSelectedAction = (song) => {
  return (dispatch) => {
    dispatch({ type: ADD_SONG_TO_SELECTED, payload: song });
  };
};

export const addSongToList = (song) => {
  return (dispatch) => {
    dispatch({
      type: ADD_SONG_TO_LIST,
      payload: song,
    });
  };
};

export const removeSongFromList = (id) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_SONG_FROM_LIST,
      payload: id,
    });
  };
};
