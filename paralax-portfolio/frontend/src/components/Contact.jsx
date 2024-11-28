import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen bg-gray-800 py-12 text-white flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold">Get In Touch</h2>
      <form className="mt-6 max-w-md w-full">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 rounded-lg bg-gray-700 text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 rounded-lg bg-gray-700 text-white"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 mb-4 rounded-lg bg-gray-700 text-white"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
