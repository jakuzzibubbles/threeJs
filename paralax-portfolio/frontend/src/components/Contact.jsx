const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen text-black flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-md">
        <h2 className="text-center w-full p-3 mb-4 rounded-lg bg-gray-700 text-white text-4xl font-bold">
          Get In Touch
        </h2>
      </div>
      <form
        className="mt-6 max-w-md w-full"
        onSubmit={(e) => e.preventDefault()}
      >
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
