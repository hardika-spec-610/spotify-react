/* eslint-disable jsx-a11y/img-redundant-alt */
import BackArrowHeader from "./BackArrowHeader";
import liked from "../Assets/liked.png";
import poster from "../Assets/artist-track-1.jfif";
import { Row, Col, Container } from "react-bootstrap";
import "./styles.css";
import { BsFillHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { removeSongFromList } from "../redux/actions";
import MusicPlayer from "./Musicplayer/MusicPlayer";

const LikedSong = () => {
  const dispatch = useDispatch();
  const selectedSong = useSelector((state) => state.selected.selectedSong);
  console.log("selectedSong", selectedSong);
  const fetchSong = useSelector((state) => state.getSong.fetchSong);
  const favoriteSongs = useSelector((state) => state.like.songs);

  console.log("favoriteSongs", favoriteSongs);
  const isLiked = favoriteSongs.some((s) => selectedSong.id === s.id);
  console.log("isLiked", isLiked);
  const likedSongs = useSelector((state) => state.like.songs);
  console.log(likedSongs);

  return (
    <div className="w-100">
      <BackArrowHeader />
      <div className="main-content padding-bottom pt-4">
        <Container fluid>
          <Row className=" align-items-end">
            <Col xs={6} sm={6} md={2} lg={3}>
              <img src={liked} alt="liked image" className="w-100" />
            </Col>
            <Col xs={6} sm={6} md={10} lg={9}>
              <div className="text-light">
                <p>PLAYLIST</p>
                <h1>Liked Songs</h1>
                <p className="mb-0">Harkunj</p>
              </div>
            </Col>
          </Row>
          <div className="mt-4">
            <button
              type="button"
              title="Play"
              className="play-green-btn new-Button"
            >
              <svg
                role="img"
                height="24"
                width="24"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-encore-id="icon"
              >
                <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
              </svg>
            </button>
            <button
              type="button"
              className="btn btn-outline-dark text-uppercase"
            >
              Following
            </button>
            <button
              type="button"
              data-toggle="tooltip"
              data-placement="top"
              title="More options for Arijit Singh"
              className="more-btn px-0"
            >
              <svg
                role="img"
                height="32"
                width="32"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-encore-id="icon"
                className="more-svg"
                fill="rgb(145, 148, 150)"
              >
                <path d="M4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm15 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
            </button>
          </div>
          {/* {likedSongs ? ( */}
          {likedSongs.map((song) => {
            return (
              <div key={song.id} className="player-track-list mt-5">
                <Row className=" align-items-center">
                  <Col className="col-6">
                    <div className="d-flex align-items-center">
                      <span className="track-num">1</span>
                      <svg
                        role="img"
                        height="18"
                        width="18"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-encore-id="icon"
                        fill="#fff"
                        className="play-icon"
                      >
                        <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                      </svg>
                      <img
                        src={poster}
                        alt="song-poster"
                        width="40px"
                        className="mr-3 ml-4"
                      />
                      <img
                        src={song.album.cover_small}
                        alt="song-poster"
                        width="40px"
                        className="mr-3 ml-4"
                      />
                      <h6 className="mb-0 text-white text-truncate track-title">
                        {song.title}
                      </h6>
                    </div>
                  </Col>
                  <div className="col-3">
                    <small className="artist-small">64,858,208</small>
                  </div>
                  <div className="col-3">
                    <div className="d-flex align-items-center justify-content-end">
                      <BsFillHeartFill
                        size={20}
                        fill="#1fdf64"
                        onClick={dispatch(removeSongFromList(song.id))}
                      />

                      <span className="artist-small mx-3 ml-5">6:10</span>
                      <button
                        type="button"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="More options for Arijit Singh"
                        className="more-btn more-btn2 px-0"
                      >
                        <svg
                          role="img"
                          height="24"
                          width="24"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-encore-id="icon"
                          className="more-svg"
                          fill="rgb(145, 148, 150)"
                        >
                          <path d="M4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm15 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </Row>
              </div>
            );
          })}
          {/* ) : (
             <div>
               <h6>You have not liked song</h6>
             </div>
           )} */}
        </Container>
      </div>
    </div>
  );
};

export default LikedSong;
