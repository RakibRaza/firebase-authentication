import React from "react";
import { useHistory } from "react-router";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useAuthContext } from "../../context/AuthContext";
const Continue = ({ from, setError }) => {
  const { googleSignIn, fbSignIn, githubSignIn } = useAuthContext();

  const history = useHistory();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      history.replace(from);
    } catch (error) {
      setError("User already exist");
    }
  };
  const handleGithubSignIn = async () => {
    try {
      await githubSignIn();
      history.replace(from);
    } catch (error) {
      setError("User already exist");
    }
  };
  const handleFacebookSignIn = async () => {
    try {
      await fbSignIn();
      history.replace(from);
    } catch (error) {
      setError("User already exist");
    }
  };
  return (
    <>
      <h6 className="divider mb-4">
        <span>or</span>
      </h6>
      <div onClick={handleFacebookSignIn} className="facebook">
        <span className="icon">
          <FaFacebook />
        </span>
        <h5 className="mb-0">Continue with Facebook</h5>
      </div>
      <div onClick={handleGoogleSignIn} className="google">
        <span className="icon">
          <FcGoogle />
        </span>
        <h5 className="mb-0">Continue with Google</h5>
      </div>
      <div onClick={handleGithubSignIn} className="github">
        <span className="icon-github">
          <FaGithub />
        </span>
        <h5 className="mb-0">Continue with Google</h5>
      </div>
    </>
  );
};

export default Continue;
