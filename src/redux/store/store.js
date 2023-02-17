import { configureStore, combineReducers } from "@reduxjs/toolkit";
import selectedSongReducer from "../reducers/selectedSong";
const bigReducer = combineReducers({
  selected: selectedSongReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
