import React from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../images/ai.webp";

const ContactDetail = () => {
  const location = useLocation();
  const contact = location.state?.contact;  // ✅ optional chaining (safe)

  if (!contact) {
    return (
      <div className="main">
        <div className="ui card centered">
          <h2>No Contact Data Found!</h2>
          <div className="center-div" style={{ marginTop: "20px" }}>
            <Link to="/">
              <button className="ui button blue center">Back to Contact List</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const { name, email } = contact;

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>

      <div className="center-div" style={{ marginTop: "20px" }}>
        <Link to="/">
          <button className="ui button blue center">Back to Contact List</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
