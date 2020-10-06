import React from "react";

const Jumbotron = () => {
  return (
    <div>
      <div className="jumbotron bg-info text-white mt-3 pb-5">
        <div className="container container-fluid">
          <div className="row">
            <h1 className="col-12">My Work</h1>

            <p className="lead col-12 pb-0">
              This is a showcase of some of my work since I've began this
              journey in 2020
            </p>
            <p className="col-12 mb-2"></p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card img-responsive">
              <img
                className="card-img-top-wedding"
                height="auto"
                width="auto"
                src="Images/AnthonyWedding2.jpg"
                alt="Photography"
              ></img>
              <div className="container bg-info text-white">
                <h5 className="card-title">Photography</h5>
                <button> className="card-link"> Photography Portfolio</button>
                <div className="card-body">
                  <p className="card-text">
                    Some examples of photography I've done throughout the years
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card" style={{ width: 18 }}>
              <img
                className="card-img-top img-responsive"
                src="../Images/findersnap.jpg"
                alt="Web Design"
              ></img>
              <h5 className="card-title ml-2">Web Design</h5>
              <a
                href="https://mrbusiness87.github.io/Finder-Project1/index.html"
                className="card-link ml-2"
              >
                Sports Finder
              </a>
              <div className="card-body">
                <p className="card-text">
                  A small simple project to help indviduals find professonal
                  sporting events near them. Features incluse: Materliaize CSS,
                  jquery, API's, ticket buying, and geolocation.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card img-responsive">
              <img
                className="card-img-top"
                src="Images/program.png"
                alt="Programmer"
              ></img>
              <div className="container bg-info text-white">
                <h5 className="card-title">Programming</h5>
                <button className="card-link">Examples</button>
                <div className="card-body">
                  <p className="card-text">
                    Some examples of my work in programming
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
