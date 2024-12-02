import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import { personalDetails } from "../utils/data"

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen text-pink flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-md">
        <h2 className="text-center w-full p-3 rounded-lg text-pink text-4xl font-semibold">
          Let&apos;s Connect 🦉
        </h2>
      
        {/* Links */}
        <div className="flex justify-center items-center gap-4 flex-wrap">
          {personalDetails.links.map((link) => (
            <div key={link.id} className="bg-pink-600 p-3 rounded-lg">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <link.icon className="text-xl text-black" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
