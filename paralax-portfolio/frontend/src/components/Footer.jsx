

const Footer = () => {
  return (
    <footer
      className="text-white py-6"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
    >
      <div className="max-w-screen-xl mx-auto px-4 flex justify-end">
        <p>&copy; {new Date().getFullYear()} Linh Nguyen</p>
      </div>
    </footer>
  );
};

export default Footer;
