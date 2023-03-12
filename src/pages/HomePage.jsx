import { useDispatch, useSelector } from "react-redux";
import Home from "../Component/Home";
import Sidebar from "../Component/Sidebar";
import { useEffect, useState } from "react";
import { addSongToPlayerSelectedAction, loadArtist } from "../redux/actions";
import MusicPlayer from "../Component/Musicplayer/MusicPlayer";

const HomePage = () => {
  const dispatch = useDispatch();
  const [recentSongs, setRecentSongs] = useState([]);
  const songsList = useSelector((state) => state.getSong.fetchSong);
  const selectedSong = useSelector((state) => state.selected.selectedSong);
  console.log("selectedSong", selectedSong);
  const favoriteSongs = useSelector((state) => state.like.songs);
  console.log("favoriteSongs", favoriteSongs);
  const isLiked = favoriteSongs.some((s) => s.id === selectedSong.id);
  console.log("isLiked", isLiked);

  const getRecentSongs = (artist) => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist
    )
      .then((response) => response.json())
      .then((data) => {
        setRecentSongs(data.data);
      });
  };

  useEffect(() => {
    dispatch(loadArtist());
    dispatch(addSongToPlayerSelectedAction(songsList[0]));
    getRecentSongs("Arijit Singh");
    // scrollHeader();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // let header = document.querySelector(".content-header");
  // const scrollHeader = () => {
  //   document.addEventListener("scroll", () => {
  //     let scrollPosition = window.scrollY;
  //     if (scrollPosition >= 1) {
  //       // header.classList.add("header-bg-color");
  //       header.style.backgroundColor = "#000";
  //     }
  //     if (scrollPosition < 1) {
  //       // header.classList.remove("header-bg-color");
  //       header.style.backgroundColor = "transparent";
  //     }
  //   });
  // };
  return (
    <div className="d-flex flex-column">
      <div className="d-flex">
        <Sidebar likedSongs={favoriteSongs} />
        <Home songs={songsList} recentSongs={recentSongs} />
      </div>
      <MusicPlayer
        fetchSong={songsList}
        selectedSong={selectedSong}
        isLiked={isLiked}
      />
    </div>
  );
};

export default HomePage;
