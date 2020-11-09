import React from "react";

const LinkedIn = () => {
  return (
    <div>
      <div
        className="LI-profile-badge col 8 right"
        data-version="v1"
        data-size="medium"
        data-locale="en_US"
        data-type="horizontal"
        data-theme="dark"
        data-vanity="kenfcheng"
      >
        <a
          className="LI-simple-link"
          href="https://www.linkedin.com/in/kenfcheng?trk=profile-badge"
        >
          Ken Cheng
        </a>
      </div>
      <p className="col 8 right">Phone Number: +1 704-692-7685</p>
    </div>
  );
};

export default LinkedIn;
