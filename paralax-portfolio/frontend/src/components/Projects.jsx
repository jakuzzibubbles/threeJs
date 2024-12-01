import { projects } from "../utils/data";

const Projects = () => {
  return (
    <section id="projects" className="p-10">
      <h2 className="text-3xl font-bold mb-5">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <div key={project.id} className="border p-5 rounded-lg shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-semibold mt-3">{project.title}</h3>
            <p className="text-gray-700 mt-2">{project.description}</p>
            <div className="flex justify-between mt-3">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                Demo
              </a>
            
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
