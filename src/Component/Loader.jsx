import React from "react";
import Spinner from "react-bootstrap/Spinner";

function LoaderSpinner() {
  return (
    <div className="spinner-container">
      <Spinner animation="grow" className="spinner-logo" />
    </div>
  );
}

export default LoaderSpinner;
