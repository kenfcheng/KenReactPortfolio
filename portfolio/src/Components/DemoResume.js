import React from "react";
import constellationbackground from "../Images/constellationbackground.jpg";
import {
  parallaxContainer,
  valignWrapper,
  parallaxAbout,
} from "../Styles/Style.css";

const DemoResume = () => {
  return (
    <div>
      <div className="container">
        <h5 className="center">Demos, Repos, and Resume</h5>
        <div className="section">
          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text">
                  <i className="material-icons">code</i>
                </h2>

                <h5 className="center">Front End</h5>

                <p className="light">
                  An example of my front-end work can be found on my GitHub. It
                  is a simple weather app that allows the user to find the
                  weather for the day by typing in the city.
                  <form
                    action="https://github.com/kenfcheng/WeatherApp.git"
                    method="get"
                    target="_blank"
                    className="col s12 center"
                  >
                    <button type="submit" className="btn s12 m4">
                      GitHub Link
                    </button>
                  </form>
                  <br></br>
                  <form
                    action="https://kenfcheng.github.io/WeatherApp/?"
                    method="get"
                    target="_blank"
                    className="col s12 center"
                  >
                    <button type="submit" className="btn s12 m4">
                      Deploy Link
                    </button>
                  </form>
                </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text">
                  <i className="material-icons">sync_alt</i>
                </h2>
                <h5 className="center">Back End</h5>

                <p className="light">
                  An example of my back-end work can be found on my GitHub. This
                  is an employee database that allows the user to track
                  empoloyees on the server-side. You can also add new employees.
                  <form
                    action="https://github.com/kenfcheng/EmployeeDatabase.git"
                    method="get"
                    target="_blank"
                    className="col s12 center"
                  >
                    <button type="submit" className="btn s12 m4">
                      GitHub Link
                    </button>
                  </form>
                  <br></br>
                  <form
                    action="https://youtu.be/d-XIHPWB0vU"
                    method="get"
                    target="_blank"
                    className="col s12 center"
                  >
                    <button type="submit" className="btn s12 m4">
                      Demo Video
                    </button>
                  </form>
                </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text">
                  <i className="material-icons">keyboard</i>
                </h2>
                <h5 className="center">Resume</h5>
                <p>
                  Are you interested but want to know more about my work
                  experience? Feel free to download my resume!
                </p>
                <a
                  className="col s12 center"
                  href="../Resume/DeveloperResume.pdf"
                  download
                >
                  <button type="button" className="btn s12 m4">
                    Download Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={parallaxContainer} {...valignWrapper}>
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row center">
              <h5 className="header col s12 light"></h5>
            </div>
          </div>
        </div>

        <div className={parallaxAbout}>
          <img
            src={constellationbackground}
            alt="Unsplashed background img 3"
          />
        </div>
      </div>
    </div>
  );
};

export default DemoResume;
