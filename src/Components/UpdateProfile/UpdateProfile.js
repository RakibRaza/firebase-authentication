import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const UpdateProfile = () => {
  const {
    updateName,
    updateEmail,
    updatePassword,
    currentUserInfo,
  } = useAuthContext();
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

      if (refName.current.value !== currentUserInfo.displayName) {
        await updateName(refName.current.value);
      }
      if (refEmail.current.value !== currentUserInfo.email) {
        await updateEmail(refEmail.current.value);
      }
      if (refPassword.current.value) {
        await updatePassword(refPassword.current.value);
      }
      history.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: "600px" }}>
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-3">Update Profile</h2>
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
                defaultValue={currentUserInfo.displayName}
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
                defaultValue={currentUserInfo.email}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password :
              </label>
              <input
                ref={refPassword}
                name="password"
                placeholder="Leave blank to keep the same"
                className="form-control"
                type="password"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirm-password" className="form-label">
                Confirm Password :
              </label>
              <input
                ref={refConfirmPassword}
                name="confirm-password"
                placeholder="Leave blank to keep the same"
                className="form-control"
                type="password"
              />
            </div>
            <button className="btn btn-primary w-100">Update</button>
          </form>
        </div>
      </div>
      <h5 className="text-center mt-3">
        <Link to="/">Cancle</Link>
      </h5>
    </div>
  );
};

export default UpdateProfile;
