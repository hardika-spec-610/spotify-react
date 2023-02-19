import { useState } from "react";
import "./styles.css";
import { Container, Row } from "react-bootstrap";
import ArtistTopCard from "./ArtistTopCard";
import HomeSongSingleCard from "./HomeSongSingleCard";
import BackArrowHeader from "./BackArrowHeader";
import { loadArtist } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Homepage = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const songsList = useSelector((state) => state.getSong.fetchSong);
  // console.log("fetchSong", songsList);

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log("search", query);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loadArtist());
  };

  return (
    <div className="d-flex flex-column">
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
              {songsList
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
            <div className="mt-5">
              <h4 className="px-0 text-white mb-3">Good afternoon</h4>
              <Row className=" py-2">
                {songsList &&
                  songsList
                    .slice(0, 8)
                    .map((song) => <ArtistTopCard key={song.id} song={song} />)}
              </Row>
            </div>
            <h4 className="px-0 text-white mb-3">More like Arijit Singh</h4>
            <Row>
              {songsList &&
                songsList.map((album) => {
                  return <HomeSongSingleCard key={album.id} s={album} />;
                })}
            </Row>
          </>
        )}
      </Container>
    </div>
  );
};
export default Homepage;
