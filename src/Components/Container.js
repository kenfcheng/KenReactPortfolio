import React from "react";

const Container = () => {
  return (
    <div>
      <div className="container">
        <div className="section">
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
                  Skeletonize. As well as Javascript frameworks like JQuery and
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
                  I have experience in writing content for newspapers, blogs,
                  and websites. A sample of some of my work can be found
                </p>
                <a href="#" download className="col s12 center">
                  <button type="button" className="btn s12 m4">
                    Writing Sample
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
