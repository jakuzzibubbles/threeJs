import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SceneInit from "./components/SceneInit"; // Import the background component

const App = () => {
  return (
    <div className="relative">
      {/* Three.js Background */}
      <SceneInit />

      {/* React Router with Components */}
      <Router>
        {/* Navbar */}
        <Header />

        {/* Main Content */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
