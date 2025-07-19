import React from 'react';

const projects = [
  {
    title: "Revenue Tracker",
    description: "Web tool tracing government allocations and tax usage for African countries.",
    tags: ["React", "Node.js", "MongoDB"]
  },
  
];

const Projects = () => {
  return (
    <section className="bg-white text-gray-800 px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
          Projects
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-yellow-400"></span>
        </h2>
        <p className="text-lg mb-12">Here are some things I've built:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-l-4 border-purple-600"
            >
              <h3 className="font-bold text-2xl mb-4 text-purple-700">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
