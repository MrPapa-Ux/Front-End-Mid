// src/App.js
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Hobby from "./components/Hobby";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Hobby />
      <Skills />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;
