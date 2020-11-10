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
      <p className="col 8 center white-text">Phone Number: +1 704-692-7685</p>
    </div>
  );
};

export default LinkedIn;
