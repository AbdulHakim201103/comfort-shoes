import React, { useRef } from "react";
import { Spinner } from "react-bootstrap";
import {useSendPasswordResetEmail,useSignInWithEmailAndPassword,} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from "../../../firebase.init";
import Social from "../Social/Social";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  let loadingElement;

  if (error) {
    errorElement = <p className="text-danger text-center">Error: {error?.message}</p>;
  }
  if (loading || sending) {
    loadingElement = (
      <p className="text-center">
        <Spinner animation="grow" variant="danger" />
      </p>
    );
  }
  if (user) {
    navigate(from, { replace: true });
  }
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("Please enter your email address");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className=" container my-5 ">
      <div className="form-container rounded border bg-light border-dark w-75 m-auto">
        <h2 className="text-center my-4 text">Please Login</h2>
        <form onSubmit={handleSubmit} className="w-50 m-auto">
          <input
            className="d-block w-100 mb-3 rounded border-1 p-2"
            type="email"
            ref={emailRef}
            placeholder="Email"
            required
          />
          <input
            className="d-block w-100  mb-3 rounded border-1 p-2"
            type="password"
            ref={passwordRef}
            placeholder="Password"
            required
          />
          <div className="text-center">
            {errorElement}
            {loadingElement}
          </div>
          <input className="d-block btn btn-primary w-100" type="submit" value="Login" />
        </form>
        <div className="w-50 m-auto my-3">
          <p className="text-center">
            New to Comfort Shoes?
            <Link className="link-btn text-decoration-none" to="/register">
              Create an Account
            </Link>
          </p>
        </div>
        <div className="w-50 m-auto my-3">
          <p className="text-center ">
            Forget Password?
            <button onClick={resetPassword} className="btn text-decoration-none btn-link">
              Reset Password
            </button>
          </p>
        </div>
        <Social></Social>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
