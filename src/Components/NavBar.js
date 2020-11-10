import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className=" blue darken-4" role="navigation">
        <div className="nav-wrapper container">
          <button
            id="logo-container"
            className="brand-logo left-align"
          ></button>
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

          <a
            href="#"
            data-target="nav-mobile"
            className="sidenav-trigger btn-floating pulse"
          >
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
