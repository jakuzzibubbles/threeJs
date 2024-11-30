import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import SceneInit from "./components/SceneInit";

const App = () => {
  return (
     <Router>
    <div className='bg-slate-200'>
      <SceneInit />
       <Navbar />
          <Routes>
            <Route path="/" element={
                <>
                  <Hero />
                  <Skills />
                  <Projects />
                  <Contact />
                </>
              } />
           </Routes>
         </div>
        <Footer />
      </Router>
  );
};

export default App;
