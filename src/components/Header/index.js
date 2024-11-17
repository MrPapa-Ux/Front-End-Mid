// src/components/Header/index.js
import React from "react";
import "./index.css";
import profileImage from "../../assets/images/1.jpg";

function Header() {
  return (
    <div>
      <header className="header">
        {" "}
        {/* Menambahkan penutupan tag header */}
        <div className="profile-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="header-text">
          <h1>Gerungan, Glenvidi Yosua</h1>
          <p>Computer-Science | Informatics | Newbie-Designer</p>
        </div>
      </header>{" "}
      {/* Menutup tag header */}
    </div>
  );
}

export default Header;
