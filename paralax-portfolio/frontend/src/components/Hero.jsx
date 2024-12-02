

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center text-black pt-16"
    >
      <div className="w-screen p-6 flex flex-col justify-center items-center">
        <h3 className="text-3xl text-black">Hi, and welcome to my Portfolio</h3>
        <div className="text-black mt-4 max-w-2xl">
          <p className="mb-4">
            I&apos;m Linh, Free-time Software Developer and professional Project
            Powerhouse. Love swimming in the ocean, vietnamese street food,
            cats, curious about the universe, cloud computing, all things art, and all things
            coding.
          </p>

          <p className="mb-4">
            Currently, I work on projects using the MERN stack because it
            provides a seamless JavaScript-based framework for developing
            full-stack, scalable, and high-performance web applications.
          </p>

          <p className="mb-4">
            MongoDB, a NoSQL database, stores data in a flexible, JSON-like
            format, perfect for handling dynamic, unstructured data and
            experimentation. With React, I create interactive and responsive
            user interfaces through reusable components, making the frontend
            highly efficient.
          </p>

          <p className="mb-4">
            All that aside, I enjoy the process of solving problems, exploring
            the cloud, and leveraging these technologies to create impactful
            solutions. Please feel free to reach out if you&apos;d like to build
            beautiful, professional websites. I look forward to discuss your
            next project.✅
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
