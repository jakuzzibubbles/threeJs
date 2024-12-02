import { useState } from 'react';
import { Link } from 'react-scroll';
import { RiCloseFill } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import MobileNavbar from "./MobileNavbar";
import awsKnowledge from "/assets/aws-knowledge.png";
import awsBuilder from "/assets/aws-builder.png";
import aws from "/assets/aws.png";
import Linux from "/assets/linux.jpg";
import Myself from "/assets/myself.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen && (
        <MobileNavbar isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}

      <div className="w-screen hidden md:flex items-center justify-center py-2 fixed top-0 z-10">
        <nav className="w-full bg-pink-600/20 py-3 px-6 absolute left-0 top-0">
          <ul className="flex items-bottom w-full">
            <li>
              <Link to="hero" smooth spy offset={-80} className="menu-item">
                <div>
                  <span className="block text-4xl">LINH</span>
                  <span className="block text-4xl">NGUYEN</span>
                </div>
              </Link>
            </li>
            <div className="ml-8 flex items-center justiry-center gap-3">
              <img
                src={Myself}
                alt="Profile"
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full transition-transform duration-300 ease-in-out hover:scale-125 border border-pink-800"
              />
              <img
                src={aws}
                alt="AWS"
                className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] transition-transform duration-300 ease-in-out hover:scale-150"
              />

              <img
                src={Linux}
                alt="Linux"
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] transition-transform duration-300 ease-in-out hover:scale-150"
              />

              <img
                src={awsKnowledge}
                alt="AWS"
                className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] transition-transform duration-300 ease-in-out hover:scale-150"
              />

              <img
                src={awsBuilder}
                alt="AWS"
                className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] transition-transform duration-300 ease-in-out hover:scale-150"
              />
            </div>
            <div className="flex flex-col gap-2 ml-auto px-4">
              <li>
                <Link
                  to="projects"
                  smooth
                  spy
                  offset={-80}
                  className="menu-item"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link to="skills" smooth spy offset={-80} className="menu-item">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="resume" smooth spy offset={-80} className="menu-item">
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth
                  spy
                  offset={-80}
                  className="menu-item"
                >
                  Contact
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
      <div className="p-3 fixed top-0 right-0 z-50">
        <button
          onClick={toggleMenu}
          className="w-11 h-11 text-pink bg-pink-800/60 border border-pink-900/80 flex items-center justify-center rounded md:hidden z-50 ml-auto"
        >
          {isMenuOpen ? <RiCloseFill /> : <CgMenuMotion />}
        </button>
      </div>
    </>
  );
};

export default Navbar;