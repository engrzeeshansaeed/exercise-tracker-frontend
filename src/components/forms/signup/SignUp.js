import React from "react";
import { Link } from "react-router-dom";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css";

const SignUp = () => {
  return (
    // Sign Up
    <div className="signup-form">
      <div className="login">
        <h1>Welcome</h1>
        <p>create your account</p>

        <form>
          <div className="form-group">
            <label className="form-label" for="name">
              Name
            </label>
            <input className="form-control" type="text" id="text" required />
          </div>

          <div className="form-group">
            <label className="form-label" for="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>

          <div className="form-group">
            <label className="form-label" for="password">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              id="password"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" for="password">
              Confirm Password
            </label>
            <input
              className="form-control"
              type="password"
              id="password"
              required
            />
          </div>

          <input
            className="btn btn-primary w-100"
            type="submit"
            value="Sign up"
          />
        </form>
        <div className="bottom-text">
          Already have an account?{" "}
          <Link className="login-redirect" to="/signin">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
