

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center text-white pt-16"
    >
      <h3 className="text-5xl font-bold text-gray-700 font-semibold">
        Welcome to My Portfolio
      </h3>
      <div className="text-md text-gray-700 font-semibold mt-4 max-w-2xl">
        <p className="mb-4">
          I&apos;m a Junior Software Developer, and a Project Powerhouse
          obsessed with the ocean, food, cloud computing, and all things coding.
        </p>

        <p className="mb-4">
          Currently, I work on projects using the MERN stack because it provides
          a seamless JavaScript-based framework for developing full-stack,
          scalable, and high-performance web applications with a modern user
          interface and robust backend.
        </p>

        <p className="mb-4">
          MongoDB, a NoSQL database, stores data in a flexible, JSON-like
          format, perfect for handling dynamic and unstructured data and
          experimentation. With React, I create interactive and responsive user
          interfaces through reusable components, making the frontend highly
          efficient.
        </p>

        <p className="mb-4">
          All that aside, I enjoy the process of solving problems and creating
          beautiful-looking websites. Please feel free to reach out if you want
          to discuss your next project.
        </p>
      </div>
    </section>
  );
};

export default Hero;
