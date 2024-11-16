// src/components/Header/index.js
import React from "react";
import "./index.css"; // Mengimpor styling untuk Header
import profileImage from "../../assets/images/1.jpg"; // Mengimpor gambar langsung

function Header() {
  // Data yang ingin ditampilkan di table
  const achievementsData = [
    { section: "Award", details: "Best Developer 2023" },
    { section: "Certification", details: "Full Stack Developer Cert." },
    { section: "Project", details: "Project Management App" },
  ];

  return (
    <div>
      <header className="header">
        <div className="profile-container">
          {/* Menggunakan gambar yang diimpor */}
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
