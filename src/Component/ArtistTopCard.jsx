import { Col } from "react-bootstrap";

const ArtistTopCard = ({ song }) => {
  return (
    <Col
      key={song.id}
      className="col-12 col-sm-12 col-md-4 col-lg-3 mb-4"
      id="topCards"
    >
      <a
        href="#page"
        className="horizontal-card-block d-flex align-items-center"
      >
        <img
          src={song.album.cover}
          alt={song.album.title}
          width="60px"
          className="media-img"
        />

        <h6 className="mx-3 mb-0 text-truncate text-white">
          {song.album.title}
        </h6>
      </a>
    </Col>
  );
};
export default ArtistTopCard;
