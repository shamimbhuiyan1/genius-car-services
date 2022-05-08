import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./Register.css";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  if (user) {
    navigate("/home");
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="register-form">
      <h3 style={{ textAlign: "center", marginTop: "10px", color: "blue" }}>
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
        <input className="btn btn-primary" type="submit" value="Register" />
      </form>

      {/* jodi already account thake tahole login in navigate korabo. */}

      <p>
        Already Have An Acoount?{" "}
        <Link
          to="/login"
          onClick={navigateLogin}
          className="text-danger pe-auto text-decoration-none"
        >
          Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
