import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import "./Register.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from "react-bootstrap";
import Social from "../Social/Social";

const Register = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  const termRef = useRef("");
  const [createUserWithEmailAndPassword, user, loading, error] =useCreateUserWithEmailAndPassword(auth,{ sendEmailVerification: true });
  const [updateAccount, updating] = useUpdateProfile(auth);
  let errorElement;
  let loadingElement;
  if (error) {
    errorElement = <p className="text-danger text-center">Error: {error?.message}</p>;
  }
  
  if (loading || updating) {
    loadingElement = (
      <p className="text-center">
        <Spinner animation="grow" variant="danger" />
      </p>
    );
  }
  if (user) {
    navigate('/home')
  }
  const handleSubmit = async(event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await createUserWithEmailAndPassword(email, password);
    await updateAccount({ displayName: name });
    toast("Updated Account");
  };
  return (
    <div className=" container my-5 ">
      <div className="form-container rounded border bg-light border-dark w-75 m-auto">
        <h2 className="text-center my-4 text">Please Register</h2>
        <form onSubmit={handleSubmit} className="w-50 m-auto">
          <input
            className="d-block w-100 mb-3 rounded border-1 p-2"
            type="text"
            ref={nameRef}
            placeholder="Name"
            required
          />
          <input
            className="d-block w-100 mb-3 rounded border-1 p-2"
            onClick={() => setAgree(!agree)}
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
          {errorElement}
          {loadingElement}
          <div className="my-3">
            <input className="me-3" ref={termRef} type="checkbox" name="terms" id="terms" required onClick={() => setAgree(!agree)}/>
            <label className={agree ? "text-danger" : "text-success"} htmlFor="terms">Accept Terms and conditions</label>
          </div>
          <input className="d-block btn btn-primary w-100" type="submit" value="Register" />
        </form>
        <div className="w-50 m-auto my-3">
          <p className="text-center">
            Already have an account?
            <Link className="link-btn" to="/login">
              Please Login
            </Link>
          </p>
        </div>
        <Social></Social>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
