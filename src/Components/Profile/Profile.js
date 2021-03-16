import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { currentUserInfo, logOut } = useAuthContext();
  const [error, setError] = useState("");
  const history = useHistory();

  const handleLogOut = async () => {
    try {
      await logOut();
      history.push("/login");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="container my-5" style={{ maxWidth: "600px" }}>
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-3">Profile</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <h4 className="mb-3">Name: {currentUserInfo.displayName}</h4>
          <h4 className="mb-3">Email: {currentUserInfo.email}</h4>
          <Link to="/update-profile">
            <button className="btn btn-primary w-100">Update Profile</button>
          </Link>
        </div>
      </div>
      <h5 className="text-center mt-3">
        <Link onClick={handleLogOut} to="/login">
          Log Out
        </Link>
      </h5>
    </div>
  );
};

export default Profile;
