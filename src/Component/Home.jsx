import LoaderSpinner from "./Loader.jsx";
import BackArrowHeader from "./BackArrowHeader";
import ArtistTopCard from "./ArtistTopCard";
import { Container, Row } from "react-bootstrap";
import "./styles.css";
import HomeSongSingleCard from "./HomeSongSingleCard";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loadArtist } from "../redux/actions/index.js";

const Home = (props) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log("search", query);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loadArtist());
  };

  return props.songs.length > 0 && props.recentSongs.length > 0 ? (
    <div className="d-flex flex-column w-100">
      <BackArrowHeader
        handleSubmit={handleSubmit}
        query={query}
        handleChange={handleChange}
      />
      <Container fluid className="padding-bottom ">
        {query !== "" ? (
          <>
            <h4 className="px-0 text-white mb-3 mt-5">Searched Song</h4>
            <Row>
              {props.songs
                .filter((searchedSong) =>
                  searchedSong.album.title.toLocaleLowerCase().includes(query)
                )

                .map((album) => (
                  <HomeSongSingleCard key={album.id} s={album} />
                ))}
            </Row>
          </>
        ) : (
          <>
            <div className="mt-5 padding-inline">
              <h4 className="px-0 text-white mb-3">Good afternoon</h4>
              <Row className=" py-2">
                {props.recentSongs &&
                  props.recentSongs
                    .slice(0, 8)
                    .map((song) => <ArtistTopCard key={song.id} song={song} />)}
              </Row>
              <h4 className="px-0 text-white mb-3">More like Arijit Singh</h4>
              <Row>
                {props.songs &&
                  props.songs.map((album) => {
                    return <HomeSongSingleCard key={album.id} s={album} />;
                  })}
              </Row>
            </div>
          </>
        )}
      </Container>
    </div>
  ) : (
    <LoaderSpinner />
  );
};

export default Home;
