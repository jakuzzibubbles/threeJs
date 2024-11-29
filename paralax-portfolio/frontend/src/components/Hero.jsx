const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center text-white"
    >
      <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
      <p className="text-xl mt-4 max-w-2xl">
        I&apos;m a MERN Stack Developer passionate about building modern, dynamic web
        applications.
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
