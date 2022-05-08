import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./Register.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import { async } from "@firebase/util";

const Register = () => {
  //checkbox terms er jonno state declare
  const [agree, setAgree] = useState(false);
  //updating  profile
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  //ekhane nouton user create korar jonn0 useCreateUserWithEmailAndPassword hooks use korchi  email verify korar jonno amra sendEmailVerification nibo
  const [createUserWithEmailAndPassword, user, loading, error1] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  if (user) {
    // navigate("/home");
    console.log("user", user);
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    //checkbox click krar ekta upay
    /* const agree = event.target.terms.checkbox */

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    navigate("/home");
  };

  return (
    <div className="register-form">
      <h3 style={{ textAlign: "center", marginTop: "10px", color: "black" }}>
        Please Register
      </h3>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Your Name" />

        <input
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
          required
        />

        <input
          type="password"
          name="password"
          id=""
          placeholder="Your Password"
          required
        />
        <div className="text-center">
          <input
            onClick={() => setAgree(!agree)}
            type="checkbox"
            name="terms"
            id="terms"
          />
          {/* <label
            className={agree ? "ps-2" : "ps-2 text-danger"}
            htmlFor="terms"
          >
            Accept Genius Car Terms & Conditions
          </label> */}
          <label
            className={`ps-2 ${agree ? "" : "ps-2 text-danger"}`}
            htmlFor="terms"
          >
            Accept Genius Car Terms & Conditions
          </label>
        </div>
        <input
          disabled={!agree}
          className="btn btn-primary w-50 mx-auto mt-2"
          type="submit"
          value="Register"
        />
      </form>

      {/* jodi already account thake tahole login in navigate korabo. */}

      <p className="text-center">
        Already Have An Acoount?{" "}
        <Link
          to="/login"
          onClick={navigateLogin}
          className="text-primary pe-auto text-decoration-none"
        >
          Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
