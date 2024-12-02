

const Footer = () => {
  return (
    <footer className="text-black bg-pink-600/20 py-6">
      <div className="max-w-screen-xl mx-auto flex justify-center">
        <p>&copy; {new Date().getFullYear()} Linh Nguyen</p>
      </div>
    </footer>
  );
};

export default Footer;
