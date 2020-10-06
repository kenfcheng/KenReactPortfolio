import React from "react";
import { navbar } from "../Styles/Portfolio.css";

const Header = () => {
  return (
    <div>
      <section>
        <nav className={navbar}></nav>
      </section>
      <h1 className="navbar navbar-home  display-6 bg-secondary text-white mr-">
        Portfolio
      </h1>
      <section className="navbar-nav ml-auto">
        <div className="navbar-item">
          <a href="contact.html" className="navbar-link">
            <button type="button" className="btn btn-info">
              Contact Me
            </button>
          </a>
        </div>
      </section>
      <section className="navbar-nav">
        <div className="navbar-item">
          <a href="index.html" className="navbar-link">
            <button type="button" className="btn btn-info">
              About Me
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Header;
