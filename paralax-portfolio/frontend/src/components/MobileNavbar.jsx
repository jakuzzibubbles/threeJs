import PropTypes from 'prop-types';


const MobileNavbar = ({ isOpen, setIsMenuOpen }) => {
  const handleScroll = (sectionId) => {
    if (isOpen) setIsMenuOpen(false);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
  MobileNavbar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsMenuOpen: PropTypes.func.isRequired,
  };
  return (
    <div className="w-screen fixed top-0 z-20">
      <div className="w-1/2 h-screen flex flex-col p-4 bg-pink-800/60 border border-pink-900/80">
        <div className="ui-circle -ml-20 -mt-10 mb-10" />

        <ul>
          <li className="mb-5">
            <a
              className="text-black font-semibold"
              onClick={() => handleScroll("hero")}
            >
              Home
            </a>
          </li>

          <li className="mb-5">
            <a
              className="text-black font-semibold"
              onClick={() => handleScroll("projects")}
            >
              Projects
            </a>
          </li>
          <li className="mb-5">
            <a
              className="text-black font-semibold"
              onClick={() => handleScroll("skills")}
            >
              Skills
            </a>
          </li>
          <li className="mb-5">
            <a
              className="text-black font-semibold"
              onClick={() => handleScroll("resume")}
            >
              Resume
            </a>
          </li>
          <li className="mb-5">
            <a
              className="text-black font-semibold"
              onClick={() => handleScroll("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div
        onClick={() => {
          setIsMenuOpen(false);
        }}
        className="w-screen h-screen fixed top-0 -z-10"
      ></div>
    </div>
  );
};

export default MobileNavbar;
