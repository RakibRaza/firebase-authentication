import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import Continue from "../Continue/Continue";

const SignUP = () => {
  const { signUp, updateName } = useAuthContext();
  const refName = useRef();
  const refEmail = useRef();
  const refPassword = useRef();
  const refConfirmPassword = useRef();
  const [error, setError] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (refPassword.current.value !== refConfirmPassword.current.value) {
      return setError("Password do not match.");
    }
    try {
      setError("");

      await signUp(refEmail.current.value, refPassword.current.value);
      await updateName(refName.current.value);
      history.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: "600px" }}>
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-3">Sign Up</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name :
              </label>
              <input
                ref={refName}
                name="name"
                placeholder="Enter your name"
                className="form-control"
                type="text"
                required
              />
            </div>
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
            <div className="mb-3">
              <label htmlFor="confirm-password" className="form-label">
                Confirm Password :
              </label>
              <input
                ref={refConfirmPassword}
                name="confirm-password"
                placeholder="confirm password"
                className="form-control"
                type="password"
                required
              />
            </div>
            <button className="btn btn-primary w-100">Sign Up</button>
          </form>
        </div>
      </div>
      <h5 className="text-center mt-3">
        Already have an account ? <Link to="/login">Log In</Link>{" "}
      </h5>
      <Continue from="/" setError={setError} />
    </div>
  );
};

export default SignUP;
