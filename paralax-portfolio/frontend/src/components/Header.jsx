import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-black bg-opacity-60 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-white text-3xl font-extrabold tracking-wide">
          My Portfolio
        </h1>
        <ul className="flex space-x-8">
          <li>
            <Link
              to="/"
              className="text-white text-lg font-semibold hover:text-yellow-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-white text-lg font-semibold hover:text-yellow-400"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white text-lg font-semibold hover:text-yellow-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white text-lg font-semibold hover:text-yellow-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
