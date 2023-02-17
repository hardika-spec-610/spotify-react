import "./styles.css";
import logo from "../Assets/spotify.svg";
import {
  BsHouseDoor,
  BsSearch,
  BsCollection,
  BsPlusSquare,
  BsFillBagPlusFill,
} from "react-icons/bs";

const Sidebar = (props) => {
  return (
    <aside className="sidebar">
      <nav className="navbar d-block">
        <span className="d-flex align-items-center header-logo mb-4">
          <img className="mr-2" src={logo} alt="spotify logo" width="38px" />
          Spotify
        </span>
        <div id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a href="../homepage.html" className="d-flex align-items-center">
                <BsHouseDoor className=" mr-3" size={24} />
                <span className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="./Search/search.html"
                className="d-flex align-items-center"
              >
                <BsSearch className=" mr-3" size={24} />
                <span className="nav-link" href="#">
                  Search{" "}
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#Library" className="d-flex align-items-center">
                <BsCollection className=" mr-3" size={24} />
                <span className="nav-link" href="#">
                  Library{" "}
                </span>
              </a>
            </li>
            <li className="nav-item mt-4">
              <a href="#Playlist" className="d-flex align-items-center">
                <BsPlusSquare className=" mr-3" size={24} />
                <span className="nav-link" href="#">
                  Create Playlist{" "}
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#LikedSongs" className="d-flex align-items-center">
                <BsFillBagPlusFill className=" mr-3" size={24} />
                <span className="nav-link" href="#">
                  Liked Songs{" "}
                </span>
              </a>
            </li>
          </ul>
          <hr />
          <ul className="sidebar-song-list">
            <li className="mb-1">
              <a href="#Jun19">Jun19</a>
            </li>
            <li className="mb-1">
              <a href="#Funky Heavy Bluesy">Funky Heavy Bluesy</a>
            </li>
            <li className="mb-1">
              <a href="#Your Top Songs 2020">Your Top Songs 2020</a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};
export default Sidebar;
