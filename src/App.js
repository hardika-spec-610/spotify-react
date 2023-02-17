import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./components/Homepage";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MusicPlayer from "./components/Musicplayer/MusicPlayer";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column">
        <div className="d-flex">
          <Sidebar />

          <Routes>
            <Route path="/" element={<Homepage />}></Route>
          </Routes>
        </div>
        <MusicPlayer />
      </div>
    </BrowserRouter>
  );
}

export default App;
