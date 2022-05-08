import React from "react";
import googleLoginIcon from "../../../../Images/social/google-logo-png.png";
import facebookLoginIcon from "../../../../Images/social/facebook_logo.png";
import githubLoginIcon from "../../../../Images/social/github.png";
const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex  align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>

      {/* login with google */}
      <div className="">
        <button className="btn btn-info d-block w-50 mx-auto">
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
        <button className="btn btn-info d-block w-50 mx-auto my-2">
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
