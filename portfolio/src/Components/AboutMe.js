import React from "react";
import milkywaybackground from "../Images/milkywaybackground.jpg";

const AboutMe = () => {
  return (
    <div>
      <div className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row center" id="AboutMe">
              <h5 className="header col s12 light">About Me</h5>
              <p>
                A North Carolina native, I got my Bachelor's degree in English
                from UNC Greensboro. Most of my professional career has been
                working in food service but I've also has the opportunity to
                write for a local newspaper and for a local news station. I was
                laid off amid the early days of the Covid pandemic so I decided
                to turn misfortune into an opportunity and learn coding.
              </p>
            </div>
          </div>
        </div>
        <div className="parallax">
          <img src={milkywaybackground} alt="Unsplashed background img 2" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
