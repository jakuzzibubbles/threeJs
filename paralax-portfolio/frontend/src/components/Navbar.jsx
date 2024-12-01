import { useState } from 'react';
import { Link } from 'react-scroll';
import { RiCloseFill } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import MobileNavbar from "./MobileNavbar";

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
        <nav
          className="w-full shadow-lg shadow-gray-600/50 py-4 px-6 absolute left-0 top-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        >
          <ul className="flex items-bottom w-full">
            <li>
              <Link
                to="hero"
                smooth
                spy
                offset={-80}
                className="menu-item font-semibold"
              >
                <div>
                  <span className="block text-4xl font-bold">LINH</span>
                  <span className="block text-4xl font-bold">NGUYEN</span>
                </div>
              </Link>
            </li>
            <div className="ml-8 flex items-center gap-4">
              <img
                src="/src/assets/myself.png"
                alt="Profile"
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full"
              />

              <img
                src="/src/assets/aws.png"
                alt="AWS"
                className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full"
              />

              <img
                src="/src/assets/linux.jpg"
                alt="Linux"
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
              />

              <img
                src="/src/assets/aws-knowledge.png"
                alt="AWS"
                className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full"
              />

              <img
                src="/src/assets/aws-builder.png"
                alt="AWS"
                className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full"
              />
            </div>
            <div className="flex flex-col gap-4 ml-auto">
              <li>
                <Link to="skills" smooth spy offset={-80} className="menu-item">
                  Skills
                </Link>
              </li>
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
          className="w-11 h-11 text-sky-300 bg-blue-800/40 border border-sky-900/80 backdrop-blur-lg flex items-center justify-center rounded md:hidden z-50 ml-auto"
        >
          {isMenuOpen ? <RiCloseFill /> : <CgMenuMotion />}
        </button>
      </div>
    </>
  );
};

export default Navbar;