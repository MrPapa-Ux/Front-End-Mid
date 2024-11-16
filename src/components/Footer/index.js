// src/components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p>Contact: yourname@example.com</p>
      <p>&copy; {new Date().getFullYear()} Your Name</p>
    </footer>
  );
}

export default Footer;
