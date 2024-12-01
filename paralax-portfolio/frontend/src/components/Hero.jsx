

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center text-white pt-16"
    >
      <h3 className="text-5xl font-bold text-gray-700 font-semibold">
        Hi, and welcome to my Portfolio
      </h3>
      <div className="text-md text-gray-700 font-semibold mt-4 max-w-2xl">
        <p className="mb-4">
          I&apos;m Linh, Junior Software Developer, and a real Senior Project Powerhouse
          obsessed with swimming in the ocean, vietnamese street food, cats,
          cloud computing, and all things coding.
        </p>

        <p className="mb-4">
          Currently, I work on projects using the MERN stack because it provides
          a seamless JavaScript-based framework for developing full-stack,
          scalable, and high-performance web applications.
        </p>

        <p className="mb-4">
          MongoDB, a NoSQL database, stores data in a flexible, JSON-like
          format, perfect for handling dynamic, unstructured data and
          experimentation. With React, I create interactive and responsive user
          interfaces through reusable components, making the frontend highly
          efficient.
        </p>

        <p className="mb-4">
          All that aside, I enjoy the process of solving problems, exploring the
          cloud, and leveraging these technologies to create impactful
          solutions. Please feel free to reach out if you&apos;d wish to build
          beautiful, professional websites. I look forward to discuss your next
          project.✅
        </p>
      </div>
    </section>
  );
};

export default Hero;
