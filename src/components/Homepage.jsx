import { useEffect, useState } from "react";
import "./styles.css";
import { Container, Row } from "react-bootstrap";
import ArtistTopCard from "./ArtistTopCard";
import HomeSongSingleCard from "./HomeSongSingleCard";

const Homepage = (props) => {
  const [songsList, setSongsList] = useState([]);
  //   const [popSong, setPopSong] = useState([]);
  //   const artistArray = ["Arijit Singh", "Avicii", "Metallica", "Eminem", "Akon"];
  //   const popArtists = [
  //     "Sonu Nigam",
  //     "Dhvani Bhanushali",
  //     "Adnan Sami",
  //     "Neha Kakkar",
  //     "katyperry",
  //   ];
  const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "828f11075cmsh673f44971af4ac0p15da10jsn7af9d8953784",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  const loadArtist = async (artistName) => {
    try {
      //   for (let i = 0; i > artistArray.length; i++) {
      let response = await fetch(url + artistName, options);
      if (response.ok) {
        const songs = await response.json();
        const { data } = songs;
        setSongsList(data);
        console.log("songs", data);
      } else {
        console.log("No songs found");
      }
      //   }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    // let popRandomSongArtist = [];
    // while (popRandomSongArtist.length < 5) {
    //   let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
    //   console.log("first", artist);

    //   if (!popRandomSongArtist.includes(artist)) {
    //     popRandomSongArtist.push(artist);
    //   }
    //   console.log("artist", popRandomSongArtist);

    //   setPopSong(popRandomSongArtist);
    //   console.log("popsong", popSong);
    // }
    // for (let k = 0; k < popRandomSongArtist.length; k++)
    //   loadArtist(popRandomSongArtist[k], popSong);

    loadArtist(props.aristname);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid>
      <div className="mt-5">
        <h4 className="px-0 text-white mb-3">Good afternoon</h4>
        <Row className=" py-2">
          {songsList.slice(0, 8).map((song) => (
            <ArtistTopCard key={song.id} song={song} />
          ))}
        </Row>
      </div>
      <h4 className="px-0 text-white mb-3">More like Arijit Singh</h4>
      <Row>
        {songsList.slice(0, 6).map((album) => (
          <HomeSongSingleCard album={album} />
        ))}
      </Row>
    </Container>
  );
};
export default Homepage;
