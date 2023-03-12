import "./styles.css";
import logo from "../Assets/spotify.svg";
import {
  BsHouseDoor,
  BsSearch,
  BsCollection,
  BsPlusSquare,
  BsFillBagPlusFill,
} from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeSongFromList } from "../redux/actions";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();

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
              <Link
                to="/"
                className={
                  location.pathname === "/"
                    ? "d-flex align-items-center active"
                    : "d-flex align-items-center"
                }
              >
                <BsHouseDoor className=" mr-3" size={24} />
                <span className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </span>
              </Link>
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
              <Link
                to="/liked-song"
                className={
                  location.pathname === "/liked-song"
                    ? "d-flex align-items-center active"
                    : "d-flex align-items-center"
                }
              >
                <BsFillBagPlusFill className=" mr-3" size={24} />
                <span className="nav-link" href="#">
                  Liked Songs{" "}
                </span>
              </Link>
            </li>
          </ul>
          <hr />
          {/* <ul className="sidebar-song-list">
            <li className="mb-1">
              <a href="#Jun19">Jun19</a>
            </li>
            <li className="mb-1">
              <a href="#Funky Heavy Bluesy">Funky Heavy Bluesy</a>
            </li>
            <li className="mb-1">
              <a href="#Your Top Songs 2020">Your Top Songs 2020</a>
            </li>
          </ul> */}
          <ul className="sidebar-song-list">
            {props.likedSongs.length > 0 ? (
              <>
                {props.likedSongs?.map((song) => {
                  return (
                    <li key={song.id}>
                      <div className="d-flex align-items-center mt-1">
                        <Link
                          to="/"
                          className="text-truncate"
                          style={{ width: "160px", color: "white" }}
                        >
                          {song.title}
                        </Link>
                        <button
                          id="dislikeButton"
                          className="btn-transparent px-2 ml-auto"
                          onClick={() => {
                            dispatch(removeSongFromList(song.id));
                          }}
                        >
                          <svg
                            role="img"
                            height="16"
                            width="16"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"></path>
                          </svg>
                        </button>
                      </div>
                    </li>
                  );
                })}
              </>
            ) : (
              "Not liked song"
            )}
          </ul>
        </div>
      </nav>
    </aside>
  );
};
export default Sidebar;
