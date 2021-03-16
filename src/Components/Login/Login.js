import React, { useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import "./Login.css";

import Continue from "../Continue/Continue";
const LogIn = () => {
  const { logIn } = useAuthContext();

  const refEmail = useRef();
  const refPassword = useRef();

  const [error, setError] = useState("");
  const location = useLocation();
  const history = useHistory();
  let { from } = location.state || { from: { pathname: "/" } };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await logIn(refEmail.current.value, refPassword.current.value);
      history.replace(from);
    } catch (error) {
      setError("No user found.");
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: "600px" }}>
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-3">Log In</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email :
              </label>
              <input
                ref={refEmail}
                name="email"
                placeholder="Enter your email"
                className="form-control"
                type="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password :
              </label>
              <input
                ref={refPassword}
                name="password"
                placeholder="Enter a password"
                className="form-control"
                type="password"
                required
              />
            </div>

            <button className="btn btn-primary w-100">Log In</button>
          </form>
          <h5 className="text-center mt-3">
            <Link to="/forgot-password">Forgot Password ?</Link>
          </h5>
        </div>
      </div>
      <h5 className="text-center my-4">
        Need an account ? <Link to="/signup">Sign Up</Link>
      </h5>
      <Continue from={from} setError={setError} />
    </div>
  );
};

export default LogIn;
