import React from "react";
import LinkedIn from "./LinkedIn";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col 4 left blue-grey lighten-4">
              <h3>
                <i className="mdi-content-send brown-text"></i>
              </h3>
              <h5>Contact Me</h5>
              <p className="left-align light">
                <form id="contact-form">
                  <input type="hidden" name="contact_number"></input>
                  <label>Name</label>
                  <input
                    type="text"
                    name="user_name"
                    style={{ height: "25px" }}
                  ></input>
                  <label>Email</label>
                  <input
                    type="email"
                    name="user_email"
                    style={{ height: "25px" }}
                  ></input>
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    style={{ height: "25px" }}
                  ></input>
                  <label>Message</label>
                  <textarea
                    name="message"
                    style={{ height: "150px" }}
                  ></textarea>
                  <input type="submit" value="Send"></input>
                </form>
              </p>
            </div>
            <LinkedIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
