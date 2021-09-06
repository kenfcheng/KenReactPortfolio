import React from "react";
import "../Styles/container.css";

const Container = () => {
  return (
    <div>
      <div className="container">
        <div className="section">
          <h4 className="exp-color">Experience</h4>
          <div className="row">
            <div className=" col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text">
                  <i className="material-icons">code</i>
                </h2>
                <h5 className="center">Front End</h5>

                <p className="light">
                  Experienced in HTML, CSS, Javascript. I am familiar with
                  various CSS frameworks like Boostrap, Materialize,
                  Skeletonize. As well as Javascript libraries like JQuery and
                  React.
                </p>
              </div>
            </div>

            <div className=" col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text">
                  <i className="material-icons">sync_alt</i>
                </h2>
                <h5 className="center">Back End</h5>

                <p className="light">
                  My server side scripting experience are in frameworks such as
                  Nodejs as well as using database systems such as mySQL,
                  Mongodb, and Sequelize. Other back end-related experience
                  includes: Passport, routing, and ORM.
                </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text">
                  <i className="material-icons">laptop</i>
                </h2>
                <h5 className="center">Content Writer</h5>

                <p className="light">
                  15+ years of experience in technical writing, content writing,
                  blog, newspaper copy, and social media.
                </p>
                <a
                  href="https://drive.google.com/drive/folders/1yhBrcfrpn-F_q5ZQ0RB_U3vOGtf21oeP?usp=sharing"
                  download
                  className="col s12 center "
                >
                  <button
                    type="button"
                    className="btn s12 m4 waves-effect waves-light grey"
                  >
                    Writing Sample
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default Container;
