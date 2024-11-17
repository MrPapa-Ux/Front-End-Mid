import React from "react";
import Slider from "react-slick";
import "./index.css";
import profileImage from "../../assets/images/1.jpg"; // Gambar profil yang digunakan di header

// Menambahkan gambar untuk slider
const images = [
  "fox.png", // Ganti dengan path gambar PNG Anda
  "oldman.png",
  "wolf.png",
];

function Header() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <header className="header">
        {/* Slider gambar PNG */}
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`slide-${index}`}
                className="slider-image"
              />
            </div>
          ))}
        </Slider>

        {/* Profil dan teks header */}
        <div className="profile-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="header-text">
          <h1>Gerungan, Glenvidi Yosua</h1>
          <p>Computer-Science | Informatics | Newbie-Designer</p>
        </div>
      </header>
    </div>
  );
}

export default Header;
