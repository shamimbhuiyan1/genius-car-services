import React from "react";
import googleLoginIcon from "../../../Images/social/google-logo-png.png";
import facebookLoginIcon from "../../../Images/social/facebook_logo.png";
import githubLoginIcon from "../../../Images/social/github.png";
import auth from "../../../firebase.init";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();

  //jodi kono error khai tahole nicher variable declare korte hbe and return korbo na,r ta na hle orthat return korle nicher other sign in option gulo ashbe na.
  let errorElement;
  if (loading || loading1) {
    return <Loading></Loading>;
  }
  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message}
        {error1?.message}
      </p>
    );
  }
  if (loading || loading1) {
    return <p>Loading...</p>;
  }
  if (user || user1) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex  align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      <p className="text-center">{errorElement}</p>

      {/* login with google */}
      <div className="">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info d-block w-50 mx-auto"
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
        <button className="btn btn-info d-block w-50 mx-auto my-2">
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
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info d-block w-50 mx-auto my-2"
        >
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
