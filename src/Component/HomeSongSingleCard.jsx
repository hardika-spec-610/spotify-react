import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addSongToPlayerSelectedAction } from "../redux/actions";
import "./styles.css";

const HomeSongSingleCard = ({ s }) => {
  const dispatch = useDispatch();

  return (
    <Col className=" col-12 mb-4 col-sm-4 mb-sm-4 col-md-4 mb-md-4 col-lg-3 mb-lg-4 col-xl-2">
      <div className="album-card w-100">
        <button
          title="Play"
          className="play-green-btn"
          onClick={() => {
            dispatch(addSongToPlayerSelectedAction(s));
          }}
        >
          <svg
            role="img"
            height="24"
            width="24"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-encore-id="icon"
          >
            <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
          </svg>
        </button>

        <a href="#page" className="w-100">
          <div className="card">
            <div className="position-relative">
              <img
                src={s.album.cover_medium}
                className="card-img-top mb-3"
                alt={s.title}
                width="100%"
              />
            </div>
            <div className="card-body p-0">
              <h6 className="card-title text-capitalize text-truncate text-white mb-0">
                {s.title}
              </h6>
              <p className="card-text text-truncate mt-1">{s.artist.name}</p>
            </div>
          </div>
        </a>
      </div>
    </Col>
  );
};
export default HomeSongSingleCard;
