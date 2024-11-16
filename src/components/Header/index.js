// src/components/Header/index.js
import React from "react";
import "./index.css"; // Mengimpor styling khusus untuk Header
import profileImage from "../../assets/images/1.jpg"; // Mengimpor gambar secara langsung

function Header() {
  return (
    <header className="header">
      <div className="profile-container">
        <img
          src={profileImage} // Menggunakan gambar yang diimpor
          alt="Profile"
          className="profile-image"
        />
      </div>
      <div className="header-text">
        <h1>Gerungan, Glenvidi Yosua</h1>
        <p>Computer-Science | Informatics | Programmer-Handal</p>
      </div>
    </header>
  );
}

export default Header;
