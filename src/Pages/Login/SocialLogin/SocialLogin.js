import React from "react";
import googleLoginIcon from "../../../Images/social/google-logo-png.png";
import facebookLoginIcon from "../../../Images/social/facebook_logo.png";
import githubLoginIcon from "../../../Images/social/github.png";
import auth from "../../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  //jodi kono error khai tahole nicher variable declare korte hbe and return korbo na,r ta na hle orthat return korle nicher other sign in option gulo ashbe na.
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex  align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}

      {/* login with google */}
      <div className="">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info d-block w-100 mx-auto"
        >
          <img
            style={{ width: "30px", height: "30px" }}
            src={googleLoginIcon}
            alt=""
          />
          <span className="px-2">Google Sign In</span>
        </button>
      </div>

      {/* login with facebook */}
      <div className="">
        <button className="btn btn-info d-block w-100 mx-auto my-2">
          <img
            style={{ width: "30px", height: "30px" }}
            src={facebookLoginIcon}
            alt=""
          />
          <span className="px-2">Facebook Sign In</span>
        </button>
      </div>
      {/* login with github */}
      <div className="">
        <button className="btn btn-info d-block w-100 mx-auto my-2">
          <img
            style={{ width: "30px", height: "30px" }}
            src={githubLoginIcon}
            alt=""
          />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
