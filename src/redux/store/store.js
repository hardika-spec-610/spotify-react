import { configureStore, combineReducers } from "@reduxjs/toolkit";
import selectedSongReducer from "../reducers/selectedSong";
import LikeSongListReducer from "../reducers/LikeSongListReducer";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage"; // default value: localStorage
import { encryptTransform } from "redux-persist-transform-encrypt";
import getSongReducer from "../reducers/getSongReducer";

const persistConfig = {
  storage: localStorage,
  key: "root", // this brings the whole redux store into persistency
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENV_SECRET_SUPER_SP0TYFY_KEY_THIRD,
    }),
  ],
};
const combinedReducer = combineReducers({
  getSong: getSongReducer,
  selected: selectedSongReducer,
  like: LikeSongListReducer, // <-- use userReducer to manage the user slice of the Store
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer, // ...giving back to reducer a single function once again
  // we're telling Redux which reducer function to use!
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
      // this shuts off the checking of non-serializable values in actions
    });
  },
});

const persistedStore = persistStore(store);

export { store, persistedStore };
