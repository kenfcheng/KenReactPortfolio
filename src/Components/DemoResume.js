import React from "react";
import myResume from "./Resume.pdf";
import DemoModal from "./demoModal";

const DemoResume = () => {
  return (
    <div>
      <a id="Demo_Resume"></a>
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

                <div className="light">
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
                </div>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text">
                  <i className="material-icons">sync_alt</i>
                </h2>
                <h5 className="center">Back End</h5>

                <div className="light">
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
                  <DemoModal />
                </div>
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

                <button type="button" className="btn s12 m4">
                  <a href={myResume} download="DeveloperResume.pdf">
                    Download Resume
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoResume;
