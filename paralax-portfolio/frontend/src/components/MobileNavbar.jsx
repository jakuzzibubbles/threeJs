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
      <div className="w-1/2 h-screen flex flex-col p-8 bg-blue-800/40 border border-sky-900/80">
        <div className="mb-1" />

        <ul>
          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("hero")}>
              Home
            </a>
          </li>

          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("projects")}>
              Projects
            </a>
          </li>
          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("skills")}>
              Skills
            </a>
          </li>
          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("contact")}>
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
