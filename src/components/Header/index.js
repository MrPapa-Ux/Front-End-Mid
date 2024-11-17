// src/components/Header/index.js
import React from "react";
import "./index.css"; // Mengimpor styling untuk Header
import profileImage from "../../assets/images/1.jpg"; // Mengimpor gambar langsung

function Header() {
  return (
    <div>
      <header className="header">
        {/* Menambahkan video latar belakang */}
        <video autoPlay muted loop>
          <source
            src="/videos/Five Nights at Freddy's 2 Song - The Living Tombstone (FNAF2).mp4"
            type="video/mp4"
          />
        </video>

        <div className="profile-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="header-text">
          <h1>Gerungan, Glenvidi Yosua</h1>
          <p>Computer-Science | Informatics | Programmer-Handal</p>
        </div>
      </header>
    </div>
  );
}

export default Header;
