import React from "react";

const LinkedIn = () => {
  return (
    <div>
      <div
        className="container LI-profile-badge col 4 center"
        data-version="v1"
        data-size="medium"
        data-locale="en_US"
        data-type="horizontal"
        data-theme="dark"
        data-vanity="kenfcheng"
        style={{ top: 30 }}
      >
        <a
          className="LI-simple-link white-text"
          href="https://www.linkedin.com/in/kenfcheng?trk=profile-badge"
        >
          Ken Cheng
        </a>
      </div>
      <h6 className="col 8 push-s2 white-text">
        Phone Number: +1 704-692-7685
      </h6>
    </div>
  );
};

export default LinkedIn;
