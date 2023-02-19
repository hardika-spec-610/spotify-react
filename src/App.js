import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./components/Homepage";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MusicPlayer from "./components/Musicplayer/MusicPlayer";
// import LikedSong from "./components/LikesSong";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column">
        <div className="d-flex">
          <Sidebar />
          <Homepage />
          {/* <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/liked-song" element={<LikedSong />}></Route>
          </Routes> */}
        </div>
        <MusicPlayer />
      </div>
    </BrowserRouter>
  );
}

export default App;
