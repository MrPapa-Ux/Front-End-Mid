// src/components/Header/index.js
import React from "react";
import "./index.css"; // Mengimpor styling khusus untuk Header

function Header() {
  return (
    <header className="header">
      <div className="profile-container">
        <img
          src={process.env.PUBLIC_URL + "/assets/images/1.jpg"}
          alt="Profile"
          className="profile-image"
        />
      </div>
      <div className="header-text">
        <h1>Your Name</h1>
        <p>Web Developer | Designer | Programmer</p>
      </div>
    </header>
  );
}

export default Header;
