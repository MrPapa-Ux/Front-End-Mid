// src/App.js
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import "./App.css"; // Impor App.css di sini, di dalam App.js

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;
