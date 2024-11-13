// src/components/Header.js
import React from "react";
import "./Header.js";

function Header() {
  return (
    <header className="header">
      <img
        src={process.env.PUBLIC_URL + "/assets/profile.jpg"}
        alt="Profile"
        className="profile-image"
      />
      <h1>Your Name</h1>
      <p>Web Developer | Designer | Programmer</p>
    </header>
  );
}

export default Header;
