import React from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="login-form">
      <div className="form">
        <div className="login">
          <h1>Welcome</h1>
          <p>create your account</p>

          <form className="needs-validation">
            <div className="form-group was-validated">
              <label className="form-label" for="email">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                required
              />
              <div className="invalid-feedback">
                Please enter your email address
              </div>
            </div>

            <div className="form-group was-validated">
              <label className="form-label" for="password">
                Password
              </label>
              <input
                className="form-control"
                type="password"
                id="password"
                required
              />
              <div className="invalid-feedback">Please enter your password</div>
            </div>

            <input
              className="btn btn-primary w-100"
              type="submit"
              value="Sign in"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
