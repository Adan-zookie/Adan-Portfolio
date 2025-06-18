import React from 'react';

const skills = [
  'C++', 'Python', 'Flutter', 'React', 
  'MongoDB', 'Figma', 'Node.js', 'Tailwind CSS',
  'JavaScript', 'TypeScript', 'Docker', 'Git'
];

const Skills = () => {
  return (
    <section className="px-6 py-16 md:py-24 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
          Skills
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-yellow-400"></span>
        </h2>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="bg-white text-purple-700 px-4 py-2 rounded-full font-medium hover:bg-purple-100 transition-all transform hover:scale-105 shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;