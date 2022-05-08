import { async } from "@firebase/util";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  // email ba jekono input field er value pete amare react useRef hook (emailRef.current.value) use korvo.alternate way instead of email.target.value er jaigte.

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  //react firebase hooks theke amra sign in dibo

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  //reset password
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  //login korar por redirect niche page cole jabe
  if (user) {
    navigate(from, { replace: true });
  }
  //error msg show
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  // jodi register kra na thake tahole ,register page navigate click korle nie jabe
  const navigateRegister = (event) => {
    navigate("/register");
  };

  //reset password
  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert("Sent email");
  };
  return (
    <div className="container w-50 mx-auto ">
      <h2 className="text-primary text-center mt-2">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
          Login
        </Button>
      </Form>
      <p className="text-center">{errorElement}</p>
      {/* navigate korar link */}
      <p className="text-center">
        New to Genius Car?{" "}
        <Link
          to="/register"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateRegister}
        >
          Please Register
        </Link>
      </p>
      {/* forget password */}
      <p className="text-center">
        Forgot Password?{" "}
        <Link
          to="/register"
          className="text-primary pe-auto text-decoration-none"
          onClick={resetPassword}
        >
          Reset Password
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
