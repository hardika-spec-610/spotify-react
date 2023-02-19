import React from "react";
import "./musicplayer.css";
import { BsHeart, BsPlayCircleFill, BsFillHeartFill } from "react-icons/bs";
import { FaRandom, FaStepBackward, FaStepForward } from "react-icons/fa";
import { FiRepeat } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import img from "../../Assets/artist-pick.jfif";
import { addLikeSong, removeLikedSong } from "../../redux/actions";

const MusicPlayer = () => {
  const dispatch = useDispatch();
  const selectedSong = useSelector((state) => state.selected.selectedSong);
  // const favoriteSongs = useSelector((state) => state.like.songs);
  // console.log("favoriteSongs", favoriteSongs);

  return (
    <>
      <div className="music-player-container">
        <div className="music-player">
          <div className="song-bar">
            <div className="song-infos">
              {selectedSong ? (
                <img
                  src={selectedSong.album.cover_small}
                  alt="current song"
                  className="image-container"
                />
              ) : (
                <img src={img} width="56" alt="current song" />
              )}
              <div className="song-description">
                {selectedSong ? (
                  <p className="title">{selectedSong.title}</p>
                ) : (
                  <p className="title"> "Kesariya"</p>
                )}
                {selectedSong ? (
                  <p className="title">{selectedSong.artist.name}</p>
                ) : (
                  <p className="title"> "Pritam"</p>
                )}
              </div>
            </div>

            {/* {isLiked ? (
              <BsFillHeartFill
                size={20}
                fill="#1fdf64"
                onClick={dispatch(removeLikedSong(selectedSong))}
              />
            ) : ( */}
            {/* <BsHeart
              size={20}
              fill="#1fdf64"
              onClick={dispatch(addLikeSong(selectedSong.title))}
            /> */}
            {/* )} */}
            {/* <div className="icons">
              {favoriteSongs.some((song) => selectedSong.id === song.id) ? (
                <BsFillHeartFill
                  size={20}
                  fill="#1fdf64"
                  onClick={toggleLike}
                />
              ) : (
                <BsHeart
                  size={20}
                  fill="#1fdf64"
                  onClick={toggleLike}
                />
              )}
            </div> */}
            <BsHeart size={20} fill="#1fdf64" />
          </div>
          <div className="progress-controller">
            <div className="control-buttons">
              <FaRandom />
              <FaStepBackward />

              <BsPlayCircleFill size={28} />
              <FaStepForward />
              <FiRepeat />
            </div>
            <div className="progress-container">
              <span id="current">0:00</span>
              <div className="progress-bar">
                <div className="progress"></div>
              </div>
              <span id="length">0:00</span>
            </div>
          </div>
          <div className="other-features">
            <i className="fas fa-list-ul"></i>
            <i className="fa-solid fa-computer"></i>
            <div className="volume-bar">
              <i className="fas fa-volume-down"></i>
              <i className="fa-solid fa-volume-xmark"></i>
              <div className="progress-bar">
                {/* <input type="range" min="0" max="100" step="0.01" value={50} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
