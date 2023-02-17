export const ADD_SONG_TO_SELECTED = "ADD_SONG_TO_SELECTED";
export const ADD_LIKE_SONG = "ADD_LIKE_SONG";
export const REMOVE_LIKED_SONG = "REMOVE_LIKED_SONG";

export const addSongToPlayerSelectedAction = (song) => ({
  type: ADD_SONG_TO_SELECTED,
  payload: song,
});

export const addLikeSong = (song) => ({
  type: ADD_LIKE_SONG,
  payload: song,
});

export const removeLikedSong = (song) => ({
  type: REMOVE_LIKED_SONG,
  payload: song,
});
