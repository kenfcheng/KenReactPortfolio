import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <button
            id="logo-container"
            className="brand-logo left-align"
          ></button>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="#"></a>
            </li>
          </ul>

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
