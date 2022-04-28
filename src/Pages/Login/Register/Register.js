import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };

  const handleRegister = (event) => {
    event.preventDefault();
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
          name=""
          id=""
          placeholder="Your Password"
          required
        />
        <input type="submit" value="Register" />
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
    </div>
  );
};

export default Register;
