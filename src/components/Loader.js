import React from "react";
import { Spinner } from "react-bootstrap";

function Loader() {
  return (
    <div className="loading-container">
      <Spinner animation="border" variant="primary" />
    </div>
  );
}

export default Loader;
