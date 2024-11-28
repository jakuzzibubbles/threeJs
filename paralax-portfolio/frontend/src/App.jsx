import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import SceneInit from "./components/SceneInit";

const App = () => {
  return (
    <div className="relative">
      <SceneInit />
      <Navbar />
      <Router>
        <div className="relative z-10">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Skills />
                  <Projects />
                  <About />
                  <Contact />
                </>
              }
            />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
