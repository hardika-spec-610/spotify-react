import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import LikedPage from "./pages/LikedPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {/* <Route path="/liked-song" element={<LikedPage />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
