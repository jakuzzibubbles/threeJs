

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="text-center">
        <p>
          &copy; {new Date().getFullYear()} Linh Nguyen. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
