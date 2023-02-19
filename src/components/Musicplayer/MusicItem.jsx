import { useDispatch, useSelector } from "react-redux";
import { addSongToList, removeSongFromList } from "../../redux/actions";
import "./musicplayer.css";
// import img from "../../Assets/artist-pick.jfif";

const MusicItem = () => {
  const dispatch = useDispatch();
  const selectedSong = useSelector((state) => state.selected.selectedSong);
  console.log("selectedSong", selectedSong);
  const fetchSong = useSelector((state) => state.getSong.fetchSong);
  const favoriteSongs = useSelector((state) => state.like.songs);

  console.log("favoriteSongs", favoriteSongs);
  const isLiked = favoriteSongs.some((s) => selectedSong.id === s.id);
  console.log("isLiked", isLiked);
  return (
    <div className="song-bar w-100 mr-4">
      <div className="song-infos">
        {selectedSong ? (
          <img
            src={selectedSong.album.cover_small}
            alt="current song"
            className="image-container"
          />
        ) : (
          <img
            src={fetchSong[0].album.cover_small}
            // src={img}
            width="56"
            alt="current song"
          />
        )}
        <div className="song-description">
          {selectedSong ? (
            <p className="title">{selectedSong.title}</p>
          ) : (
            <p className="title">{fetchSong[0].title}</p>
            // <p className="title">Kesariya</p>
          )}
          {selectedSong ? (
            <p className="title">{selectedSong.artist.name}</p>
          ) : (
            <p className="title">{fetchSong[0].artist.name}</p>
            // <p className="title">Pritam</p>
          )}
        </div>
      </div>
      {isLiked ? (
        <button
          id="dislikeButton"
          className="btn-transparent "
          onClick={() => {
            dispatch(removeSongFromList(selectedSong.id));
          }}
        >
          <svg role="img" height="16" width="16" viewBox="0 0 16 16">
            <path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"></path>
          </svg>
        </button>
      ) : (
        <button
          className="btn-transparent"
          onClick={() => {
            dispatch(addSongToList(selectedSong));
          }}
        >
          <svg
            role="img"
            height="16"
            width="16"
            aria-hidden="true"
            fill="#1bd760"
          >
            <path d="M1.69 2A4.582 4.582 0 018 2.023 4.583 4.583 0 0111.88.817h.002a4.618 4.618 0 013.782 3.65v.003a4.543 4.543 0 01-1.011 3.84L9.35 14.629a1.765 1.765 0 01-2.093.464 1.762 1.762 0 01-.605-.463L1.348 8.309A4.582 4.582 0 011.689 2zm3.158.252A3.082 3.082 0 002.49 7.337l.005.005L7.8 13.664a.264.264 0 00.311.069.262.262 0 00.09-.069l5.312-6.33a3.043 3.043 0 00.68-2.573 3.118 3.118 0 00-2.551-2.463 3.079 3.079 0 00-2.612.816l-.007.007a1.501 1.501 0 01-2.045 0l-.009-.008a3.082 3.082 0 00-2.121-.861z"></path>
          </svg>
        </button>
      )}
    </div>
  );
};
export default MusicItem;
