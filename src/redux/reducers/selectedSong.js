import { ADD_SONG_TO_SELECTED } from "../actions";

const initialState = {
  // selectedSong: [
  //   {
  //     id: 2079127347,
  //     readable: true,
  //     title: "Jhoome Jo Pathaan",
  //     title_short: "Jhoome Jo Pathaan",
  //     title_version: "",
  //     link: "https://www.deezer.com/track/2079127347",
  //     duration: 208,
  //     rank: 532800,
  //     explicit_lyrics: false,
  //     explicit_content_lyrics: 0,
  //     explicit_content_cover: 0,
  //     preview:
  //       "https://cdns-preview-1.dzcdn.net/stream/c-1b93f167be4da8060c9bfd8044d25d27-4.mp3",
  //     md5_image: "4d2a0ddc16e20cee01b55735c285d45e",
  //     artist: {
  //       id: 7760,
  //       name: "Vishal-Shekhar",
  //       link: "https://www.deezer.com/artist/7760",
  //       picture: "https://api.deezer.com/artist/7760/image",
  //       picture_small:
  //         "https://e-cdns-images.dzcdn.net/images/artist/4d2a0ddc16e20cee01b55735c285d45e/56x56-000000-80-0-0.jpg",
  //       picture_medium:
  //         "https://e-cdns-images.dzcdn.net/images/artist/4d2a0ddc16e20cee01b55735c285d45e/250x250-000000-80-0-0.jpg",
  //       picture_big:
  //         "https://e-cdns-images.dzcdn.net/images/artist/4d2a0ddc16e20cee01b55735c285d45e/500x500-000000-80-0-0.jpg",
  //       picture_xl:
  //         "https://e-cdns-images.dzcdn.net/images/artist/4d2a0ddc16e20cee01b55735c285d45e/1000x1000-000000-80-0-0.jpg",
  //       tracklist:
  //         "https://striveschool-api.herokuapp.com/api/deezer/artist/7760/top?limit=50",
  //       type: "artist",
  //     },
  //     album: {
  //       id: 388926307,
  //       title: "Pathaan",
  //       cover: "https://api.deezer.com/album/388926307/image",
  //       cover_small:
  //         "https://e-cdns-images.dzcdn.net/images/cover/4d2a0ddc16e20cee01b55735c285d45e/56x56-000000-80-0-0.jpg",
  //       cover_medium:
  //         "https://e-cdns-images.dzcdn.net/images/cover/4d2a0ddc16e20cee01b55735c285d45e/250x250-000000-80-0-0.jpg",
  //       cover_big:
  //         "https://e-cdns-images.dzcdn.net/images/cover/4d2a0ddc16e20cee01b55735c285d45e/500x500-000000-80-0-0.jpg",
  //       cover_xl:
  //         "https://e-cdns-images.dzcdn.net/images/cover/4d2a0ddc16e20cee01b55735c285d45e/1000x1000-000000-80-0-0.jpg",
  //       md5_image: "4d2a0ddc16e20cee01b55735c285d45e",
  //       tracklist: "https://api.deezer.com/album/388926307/tracks",
  //       type: "album",
  //     },
  //     type: "track",
  //   },
  // ],
  selectedSong: [],
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
