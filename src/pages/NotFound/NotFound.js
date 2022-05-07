import React from "react";
import { Link } from "react-router-dom";
import notfound from "../../images/not-found/notfound1.webp";

const NotFound = () => {
  return (
    <div className="container my-5">
      <div>
        <div className="d-flex my-5 justify-content-center align-content-center">
          <img src={notfound} alt="" />
        </div>
        <br />
        <div className="d-flex my-5 justify-content-center align-content-center">
        <Link className="btn btn-danger " to="/">
          Go to Home
        </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
