import React from "react";
// Imports FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
// Imports Icons
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../Styles/nav.css";

// import { fab } from

const NavBar = () => {
  return (
    <div>
      <nav className="navbar" role="navigation">
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
            <ul className="white-text col 3">
              <a href="#Email"> Email</a>
            </ul>

            <a href="https://github.com/kenfcheng">
              <FontAwesomeIcon
                icon={faGithub}
                style={{ width: "35px", height: "35px" }}
              />
              GitHub
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
