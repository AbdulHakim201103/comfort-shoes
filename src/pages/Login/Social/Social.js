import React from "react";
import "./Social.css";
import google from '../../../images/google.png'
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Spinner } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  let loadingElement;

  if (error) {
    errorElement = <p className="text-danger text-center">Error: {error?.message}</p>;
  }

  if (loading) {
    loadingElement = 
      <p className="text-center">
        <Spinner animation="grow" variant="danger" />
      </p>
  }

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="d-flex w-50 my-3 m-auto justify-content-center align-items-center">
        <div className="left-bar me-3"></div>
        <p className="text-success">Or</p>
        <div className="right-bar ms-3"></div>
      </div>
      {errorElement}
      {loadingElement}
      <div className="w-50 m-auto">
        <button onClick={() => signInWithGoogle()} className="btn border bg-white mb-5 w-100">
          <img className="me-3" src={google} width="30px" alt="" /> Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Social;
