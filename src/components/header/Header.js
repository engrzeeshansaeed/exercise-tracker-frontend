import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Exercise Tracker
            </Link>

            <div>
              <Link className="header-btn" to="/activity">
                Add Exercise
              </Link>

              <NavLink className="header-btn" to="/signin">
                Sign In
              </NavLink>

              <NavLink className="header-btn" to="/signup">
                Sign Up
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
