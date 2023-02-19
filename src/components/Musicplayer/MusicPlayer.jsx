import React from "react";
import "./musicplayer.css";
import { useSelector } from "react-redux";
import ReactAudioPlayer from "react-audio-player";

import MusicItem from "./MusicItem";
import { Col, Row } from "react-bootstrap";

const MusicPlayer = () => {
  const selectedSong = useSelector((state) => state.selected.selectedSong);
  console.log("selectedSong", selectedSong);
  const favoriteSongs = useSelector((state) => state.like.songs);
  console.log("favoriteSongs", favoriteSongs);
  const isLiked = favoriteSongs.some((s) => selectedSong.id === s.id);
  console.log("isLiked", isLiked);

  return (
    <>
      <div className="music-player-container ">
        <div className="music-player justify-content-between">
          <Row className="w-100">
            <Col className="col-4">
              <MusicItem />
            </Col>
            <Col className="col-4">
              <div className="w-100">
                <ReactAudioPlayer
                  src={selectedSong.preview}
                  controls
                  className="w-100"
                  style={{ backgroundColor: "transparent" }}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
