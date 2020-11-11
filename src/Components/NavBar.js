import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="  cyan darken-4" role="navigation">
        <div className="nav-wrapper container">
          <div className="right hide-on-med-and-down row">
            <ul className="white-text col 1">
              <a href="#Demo_Resume">Demo/Resume</a>
            </ul>
            <ul className="white-text col 2">
              <a href="#Contact">Contact</a>
            </ul>
            <ul className="white-text col 3">
              <a href="#About_Me"> About Me</a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
