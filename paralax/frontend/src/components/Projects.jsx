import React from "react";

const projects = [
  {
    title: "Project 1",
    description: "A short description of the project.",
    link: "https://example.com",
  },
  {
    title: "Project 2",
    description: "Another project description.",
    link: "https://example.com",
  },
  {
    title: "Project 3",
    description: "Yet another project.",
    link: "https://example.com",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="h-screen bg-black bg-opacity-75 py-12 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-400 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
