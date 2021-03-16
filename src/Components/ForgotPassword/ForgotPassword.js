import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const ForgotPassword = () => {
  const { resetPassword } = useAuthContext();

  const refEmail = useRef();

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setMessage("");
      setError("");

      await resetPassword(refEmail.current.value);
      setMessage("check your inbox for further instructions.");
    } catch (error) {
      setError("This email does not exist.");
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: "600px" }}>
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-3">Reset Password</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          {message && <div className="alert alert-success">{message}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email :
              </label>
              <input
                ref={refEmail}
                name="email"
                placeholder="Inter your email"
                className="form-control"
                type="email"
                required
              />
            </div>

            <button className="btn btn-primary w-100">Reset Password</button>
          </form>
          <h5 className="text-center mt-3">
            <Link to="/login">Log In</Link>
          </h5>
        </div>
      </div>
      <h5 className="text-center mt-3">
        Need an account ? <Link to="/signup">Sign Up</Link>
      </h5>
    </div>
  );
};

export default ForgotPassword;
