import React, { useState, useEffect } from "react";
import "./index.css";
import profileImage from "../../assets/images/1.jpg"; // Your profile image
import image1 from "../../assets/images/fox.png"; // Example additional image
import image2 from "../../assets/images/wolf.png"; // Example additional image
import image3 from "../../assets/images/oldman.png"; // Example additional image

const images = [image1, image2, image3]; // Array of images for the slideshow

function Header() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <div className="profile-container">
        <img
          src={profileImage}
          alt="Glenvidi Yosua"
          className="profile-image"
        />
      </div>
      <div className="header-text">
        <h1>Gerungan, Glenvidi Yosua</h1>
        <p>Computer-Science | Informatics | Newbie-Designer</p>
      </div>
      <div className="slideshow-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`slideshow-image ${
              index === currentImageIndex ? "fade-in" : ""
            }`}
          />
        ))}
      </div>
    </header>
  );
}

export default Header;
